# src/app/pages/admin/components/unit-manager

Bu klasördeki TypeScript dosyaları ve modüller:

- unit-manager.ts: Ünite ekleme, güncelleme, silme ve listeleme işlemlerini sağlayan Angular standalone bileşeni.
- unit.router.ts: Ünite modülü için route tanımları ve dinamik bileşen yükleme.
- index.ts: Ünite modülüne ait tüm bileşenlerin dışa aktarımı.
- add/add-unit-modal.component.ts: Ünite ekleme modal bileşeni.
- update/update-unit-modal.component.ts: Ünite güncelleme modal bileşeni.
- delete/delete-unit-modal.component.ts: Ünite silme modal bileşeni.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## unit-manager.ts
- Firestore'dan ünite verilerini çeker, ekler, günceller ve siler.
- Modal bileşenlerle ünite ekleme, güncelleme ve silme işlemlerini yönetir.

## unit.router.ts
- Ünite modülü için route tanımlarını içerir.
- Dinamik olarak UnitManager bileşenini yükler.

## index.ts
- Ünite modülüne ait tüm bileşenlerin dışa aktarımı.

## add/add-unit-modal.component.ts
- Ünite ekleme modal bileşeni. Form ile yeni ünite ekler ve EventEmitter ile bildirir.

## update/update-unit-modal.component.ts
- Ünite güncelleme modal bileşeni. Form ile mevcut üniteyi günceller ve EventEmitter ile bildirir.

## delete/delete-unit-modal.component.ts
- Ünite silme modal bileşeni. Seçilen üniteyi siler ve EventEmitter ile bildirir.
