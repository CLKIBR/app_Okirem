# src/app/pages/admin/components/topic-manager

Bu klasördeki TypeScript dosyaları ve modüller:

- topic-manager.ts: Konu ekleme, güncelleme, silme ve listeleme işlemlerini sağlayan Angular standalone bileşeni.
- topic.router.ts: Konu modülü için route tanımları ve dinamik bileşen yükleme.
- index.ts: Konu modülüne ait tüm bileşenlerin dışa aktarımı.
- add/add-topic-modal.component.ts: Konu ekleme modal bileşeni.
- update/update-topic-modal.component.ts: Konu güncelleme modal bileşeni.
- delete/delete-topic-modal.component.ts: Konu silme modal bileşeni.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## topic-manager.ts
- Firestore'dan ilgili üniteye ait konu verilerini çeker, ekler, günceller ve siler.
- Modal bileşenlerle konu ekleme, güncelleme ve silme işlemlerini yönetir.

## topic.router.ts
- Konu modülü için route tanımlarını içerir.
- Dinamik olarak TopicManager bileşenini yükler.

## index.ts
- Konu modülüne ait tüm bileşenlerin dışa aktarımı.

## add/add-topic-modal.component.ts
- Konu ekleme modal bileşeni. Form ile yeni konu ekler ve EventEmitter ile bildirir.

## update/update-topic-modal.component.ts
- Konu güncelleme modal bileşeni. Form ile mevcut konuyu günceller ve EventEmitter ile bildirir.

## delete/delete-topic-modal.component.ts
- Konu silme modal bileşeni. Seçilen konuyu siler ve EventEmitter ile bildirir.
