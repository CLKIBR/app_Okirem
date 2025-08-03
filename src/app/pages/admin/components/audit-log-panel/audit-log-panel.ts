// Copyright (c) 2025 CLKIBR
// Tüm Hakları Saklıdır - Ayrıntılar için LICENSE dosyasına bakınız

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-audit-log-panel',
  templateUrl: './audit-log-panel.html',
  styleUrls: ['./audit-log-panel.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AuditLogPanel {
  logs$: Observable<any[]>;
  filter = '';

  private firestore = inject(Firestore);

  constructor() {
    const auditLogsCollection = collection(this.firestore, 'audit_logs');
    this.logs$ = collectionData(auditLogsCollection);
  }

  get filteredLogs() {
    // Bu fonksiyon artık template'de kullanılmayacak, async pipe ile filtreleme yapılabilir
    return [];
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  exportCSV(logs: any[]): void {
    if (!logs.length) return;
    const rows = logs.map(log => Object.values(log).join(','));
    const csv = [Object.keys(logs[0]).join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audit_logs.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
