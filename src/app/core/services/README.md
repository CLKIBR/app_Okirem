# src/app/core/services

Bu klasördeki TypeScript dosyaları ve modüller:

- audit-log.ts: Kullanıcı ve sistem hareketlerini Firestore'a kaydeden denetim log servisi.
- auth.service.ts: Firebase Auth ile kimlik doğrulama, kullanıcı yönetimi ve rol kontrolü sağlayan servis.
- data-encryption.service.ts: AES ile veri şifreleme ve çözme işlemlerini yöneten servis.
- learn-content.service.ts: Firestore'dan ünite ve konu verilerini asenkron olarak çeken ve birleştiren servis.
- lesson.service.ts: Ders verilerini Firestore'dan yöneten, ekleme, güncelleme ve silme işlemlerini sağlayan servis.
- index.ts: Servis modüllerinin dışa aktarımı.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## audit-log.ts
- Firestore'a kullanıcı ve sistem hareketlerini kaydeder.
- IP adresi, kullanıcı kimliği, e-posta, zaman damgası ve işlem detaylarını loglar.

## auth.service.ts
- Firebase Auth ile kimlik doğrulama, oturum açma/kapatma, kullanıcı kaydı ve rol kontrolü sağlar.
- Kullanıcı verilerini şifreli olarak yönetir.

## data-encryption.service.ts
- AES algoritması ile veri şifreleme ve çözme işlemlerini yönetir.
- Uygulama genelinde güvenli veri akışı sağlar.

## learn-content.service.ts
- Firestore'dan ünite ve konu verilerini asenkron olarak çeker ve birleştirir.
- combineLatest ile tüm ünitelerin konularını birleştirir.

## lesson.service.ts
- Firestore'dan ders verilerini çeker, ekler, günceller ve siler.
- Derslerin başlık, tarih, süre, ikon ve stil bilgilerini yönetir.

## index.ts
- Tüm servis modüllerini dışa aktarır.
