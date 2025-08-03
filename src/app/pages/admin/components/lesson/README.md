# src/app/pages/admin/components/lesson

Bu klasördeki TypeScript dosyaları ve modüller:

- lesson.ts: Ders ekleme, güncelleme, silme ve listeleme işlemlerini sağlayan Angular standalone bileşeni.
- lesson.router.ts: Ders modülü için route tanımları ve dinamik bileşen yükleme.
- index.ts: Ders modülüne ait tüm bileşenlerin dışa aktarımı.
- add/: Ders ekleme modal bileşeni ve yardımcı modüller.
- update/: Ders güncelleme modal bileşeni ve yardımcı modüller.
- delete/: Ders silme modal bileşeni ve yardımcı modüller.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## lesson.ts
- Firestore'dan ders verilerini çeker, ekler, günceller ve siler.
- Modal bileşenlerle ders ekleme, güncelleme ve silme işlemlerini yönetir.
- Angular signal API ile reaktif veri yönetimi sağlar.

## lesson.router.ts
- Ders modülü için route tanımlarını içerir.
- Dinamik olarak LessonComponent bileşenini yükler.

## index.ts
- Ders modülüne ait tüm bileşenlerin dışa aktarımı.

## add/add-modal.ts
- Ders ekleme modal bileşeni. Form ile yeni ders ekler, Firestore'a kaydeder ve eklenen dersi EventEmitter ile bildirir.

## update/update-modal.ts
- Ders güncelleme modal bileşeni. Form ile mevcut dersi günceller, Firestore'a kaydeder ve güncellenen dersi EventEmitter ile bildirir.

## delete/delete-modal.ts
- Ders silme modal bileşeni. Seçilen dersi Firestore'dan siler ve silinen dersi EventEmitter ile bildirir.
