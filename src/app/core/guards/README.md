# src/app/core/guards

Bu klasördeki TypeScript dosyaları ve modüller:

- auth.guard.ts: Kullanıcı kimliği ve rolüne göre route erişimini kontrol eden guard.
- audit-log-guard.ts: Route erişimlerinde denetim ve loglama sağlayan guard servisi.
- index.ts: Guard modüllerinin dışa aktarımı.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## auth.guard.ts
- Angular'ın CanActivateFn fonksiyonunu kullanır.
- Kullanıcı oturumunu ve rolünü AuthService ile kontrol eder.
- Eğer kullanıcı yoksa otomatik olarak /login sayfasına yönlendirir.
- Kullanıcı rolüne göre (admin, student, teacher, parent) sadece ilgili route'lara erişime izin verir.
- Yanlış route isteğinde, kullanıcı rolüne uygun ana sayfaya yönlendirir.
- Tüm kontroller RxJS ile asenkron şekilde yapılır ve loglama içerir.

## audit-log-guard.ts
- Route erişimlerinde AuditLogService ile log kaydı oluşturur.
- Tüm geçişlerde asenkron loglama ve denetim sağlar.

## index.ts
- Tüm guard modüllerini dışa aktarır (auth.guard.ts ve audit-log-guard.ts).
