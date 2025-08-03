// Copyright (c) 2025 CLKIBR
// Tüm Hakları Saklıdır - Ayrıntılar için LICENSE dosyasına bakınız

import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuditLogService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  async log(action: string, details: any = {}) {
    const user = this.auth.currentUser;
    let ip = '';
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      ip = data.ip;
    } catch (e) {
      ip = 'unknown';
    }
    const logEntry = {
      action,
      details,
      userId: user?.uid || null,
      email: user?.email || null,
      timestamp: new Date().toISOString(),
      ip
    };
    await addDoc(collection(this.firestore, 'audit_logs'), logEntry);
  }
}
