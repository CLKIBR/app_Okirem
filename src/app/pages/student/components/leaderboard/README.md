# Leaderboard Component

## Amaç
Kullanıcıların XP puanına göre sıralandığı liderlik tablosunu gösterir. Sıralama, Firestore'daki `users` koleksiyonundan alınan XP değerine göre yapılır.

## Özellikler
- Firestore'dan kullanıcıları XP'ye göre azalan şekilde çeker ve sıralar.
- Sıralama, avatar ve kullanıcı adı ile birlikte gösterilir.
- Yüklenme ve hata durumları için bilgilendirme sunar.
- Responsive ve modern arayüz.
- Angular Standalone Component olarak tasarlanmıştır.

## Kullanılan Teknolojiler
- Angular Standalone Component
- RxJS
- Firestore
- TypeScript

## Dosya Yapısı
- `leaderboard.component.ts`: Component mantığı, Firestore'dan veri çekme, state yönetimi.
- `leaderboard.component.html`: Liderlik tablosu arayüzü.
- `leaderboard.component.scss`: Stil dosyası.

## Son Güncellemeler
- XP'ye göre sıralama ve tablo görünümü eklendi.
- Yüklenme ve hata yönetimi optimize edildi.
- Avatar desteği ve responsive tasarım eklendi.
