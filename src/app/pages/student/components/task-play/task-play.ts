import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'task-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-play.html',
  styleUrls: ['./task-play.scss']
})
export class TaskPlayComponent implements OnInit {
  taskId!: string;
  taskType!: string;
  taskTarget!: string;
  quizAnswered = false;
  quizCorrect = false;
  loading = false;
  rewardValue = 0;
  studentId = '';

  constructor(private route: ActivatedRoute, private firestore: Firestore, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = params['taskId'];
    });
    this.route.queryParams.subscribe(params => {
      this.taskType = params['type'];
      this.taskTarget = params['target'];
    });
    // Görev detayını Firestore'dan çek
    this.loadTaskDetails();
  }

  async loadTaskDetails() {
    if (!this.taskId) return;
    const ref = doc(this.firestore, 'daily-tasks', this.taskId);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data: any = snap.data();
      this.rewardValue = data.rewardValue || 0;
      this.studentId = data.studentId || '';
    }
  }

  async completeQuiz() {
    this.loading = true;
    // Görevi tamamlandı olarak işaretle
    const ref = doc(this.firestore, 'daily-tasks', this.taskId);
    await updateDoc(ref, { isCompleted: true });
    // Kullanıcıya XP ekle (users/{studentId} dokümanında xpVolume alanı)
    if (this.studentId && this.rewardValue > 0) {
      const userRef = doc(this.firestore, 'users', this.studentId);
      const userSnap = await getDoc(userRef);
      let currentXp = 0;
      if (userSnap.exists()) {
        const userData: any = userSnap.data();
        currentXp = userData.xpVolume || 0;
      }
      await updateDoc(userRef, { xpVolume: currentXp + this.rewardValue });
    }
    this.loading = false;
    this.quizAnswered = true;
    this.quizCorrect = true;
    // Quiz tamamlanınca görevler ekranına yönlendir
    this.router.navigate(['/student/dashboard']);
  }
}
