import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData, collection, query, orderBy } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

export interface LeaderboardUser {
  id: string;
  fullName: string;
  xpVolume: number;
  avatarUrl?: string;
}

@Component({
  selector: 'leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrls: ['./leaderboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Leaderboard implements OnInit {
  users$ = new BehaviorSubject<LeaderboardUser[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.fetchLeaderboard();
  }

  fetchLeaderboard() {
    this.loading$.next(true);
    const usersQuery = query(
      collection(this.firestore, 'users'),
      orderBy('xpVolume', 'desc')
    );
    collectionData(usersQuery, { idField: 'id' }).subscribe({
      next: (users: any[]) => {
        // fullName yoksa firstName + lastName ile oluştur
        const mapped = users.map(u => ({
          ...u,
          fullName: u.fullName || `${u.firstName || ''} ${u.lastName || ''}`.trim()
        })) as LeaderboardUser[];
        this.users$.next(mapped);
        this.loading$.next(false);
      },
      error: () => {
        this.error$.next('Liderlik tablosu yüklenemedi');
        this.loading$.next(false);
      }
    });
  }
}
