// Copyright (c) 2025 CLKIBR
// Tüm Hakları Saklıdır - Ayrıntılar için LICENSE dosyasına bakınız

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuditLogService } from '../services/audit-log';

@Injectable({ providedIn: 'root' })
export class AuditLogGuard implements CanActivate {
  constructor(private auditLog: AuditLogService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    await this.auditLog.log('route_access', { route: state.url });
    return true;
  }
}
