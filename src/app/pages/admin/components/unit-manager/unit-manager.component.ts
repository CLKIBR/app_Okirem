

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUnitModalComponent } from './add/add-unit-modal.component';
import { UpdateUnitModalComponent } from './update/update-unit-modal.component';
import { DeleteUnitModalComponent } from './delete/delete-unit-modal.component';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Unit {
  id: string;
  title: string;
  order: number;
}

@Component({
  selector: 'app-unit-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddUnitModalComponent, UpdateUnitModalComponent, DeleteUnitModalComponent],
  templateUrl: './unit-manager.component.html',
  styleUrls: ['./unit-manager.component.scss'],
})
export class UnitManagerComponent {
  private firestore = inject(Firestore);
  showAddModal = false;
  editUnit: Unit | null = null;
  deleteUnitData: Unit | null = null;

  units$: Observable<Unit[]> = collectionData(
    query(collection(this.firestore, 'units'), orderBy('order')),
    { idField: 'id' }
  ) as Observable<Unit[]>;

  async handleAdd(data: { title: string; order: number }) {
    await addDoc(collection(this.firestore, 'units'), data);
    this.showAddModal = false;
  }


  openDeleteModal(unit: Unit) {
    this.deleteUnitData = unit;
  }

  async confirmDelete() {
    if (!this.deleteUnitData?.id) return;
    await deleteDoc(doc(this.firestore, 'units', this.deleteUnitData.id));
    this.deleteUnitData = null;
  }

  closeDeleteModal() {
    this.deleteUnitData = null;
  }

  async handleUpdate(data: { id: string; title: string; order: number }) {
    await updateDoc(doc(this.firestore, 'units', data.id), { title: data.title, order: data.order });
    this.editUnit = null;
  }
}
