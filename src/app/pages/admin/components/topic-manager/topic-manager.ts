import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTopicModalComponent } from './add/add-topic-modal.component';
import { UpdateTopicModalComponent } from './update/update-topic-modal.component';
import { DeleteTopicModalComponent } from './delete/delete-topic-modal.component';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Topic {
  id?: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  order: number;
}

@Component({
  selector: 'app-topic-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddTopicModalComponent, UpdateTopicModalComponent, DeleteTopicModalComponent],
  templateUrl: './topic-manager.html',
  styleUrls: ['./topic-manager.scss'],
})
export class TopicManager {
  @Input() unitId!: string;
  private firestore = inject(Firestore);

  showAddModal = false;
  editTopic: Topic | null = null;
  deleteTopicData: Topic | null = null;

  topics$: Observable<Topic[]> = collectionData(
    query(collection(this.firestore, `units/${this.unitId}/topics`), orderBy('order')),
    { idField: 'id' }
  ) as Observable<Topic[]>;

  async handleAdd(data: any) {
    await addDoc(collection(this.firestore, `units/${this.unitId}/topics`), data);
    this.showAddModal = false;
  }

  openDeleteModal(topic: Topic) {
    this.deleteTopicData = topic;
  }

  async confirmDelete() {
    if (!this.deleteTopicData?.id) return;
    await deleteDoc(doc(this.firestore, `units/${this.unitId}/topics`, this.deleteTopicData.id));
    this.deleteTopicData = null;
  }

  closeDeleteModal() {
    this.deleteTopicData = null;
  }

  async handleUpdate(data: any) {
    await updateDoc(doc(this.firestore, `units/${this.unitId}/topics`, data.id), data);
    this.editTopic = null;
  }
}
