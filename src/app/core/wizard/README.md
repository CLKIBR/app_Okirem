# src/app/core/wizard

Bu klasördeki TypeScript dosyaları ve modüller:

- registration.service.ts: Kullanıcı rolüne göre (student, teacher, parent) adım adım kayıt sihirbazı adımlarını ve alanlarını dinamik olarak sağlayan servis.
- index.ts: Wizard modüllerinin dışa aktarımı.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## registration.service.ts
- Kullanıcı rolüne göre (student, teacher, parent) farklı kayıt adımlarını ve alanlarını dinamik olarak döndürür.
- Her adım için label, field, type, required, options ve message gibi özellikler içerir.
- Kayıt sürecini kullanıcıya rehberlik edecek şekilde özelleştirir.

## index.ts
- Tüm wizard modüllerini dışa aktarır (şu anda sadece registration.service.ts).
