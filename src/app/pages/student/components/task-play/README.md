# task-play

## Amaç
Öğrencinin seçtiği görevi/kuizi oynayabileceği, tamamlayınca ödül (XP/Coin) kazanabileceği ve dashboard'a yönlendirileceği bileşen.

## Özellikler
- Görev detaylarını ve ödül bilgisini gösterir.
- Quiz/görev tamamlanınca XP veya Coin güncellemesi yapar.
- XP güncellemesi doğrudan users koleksiyonunda yapılır.
- Tamamlanma sonrası dashboard'a yönlendirme yapılır.
- Firestore'dan görev ve kullanıcı verisi çeker.
- SPA navigasyonu ve hata yönetimi.
- Tüm console.log mesajları kaldırıldı.

## Kullanılan Teknolojiler
- Angular Standalone Component
- Firestore
- Angular Router
- TypeScript

## Dosya Yapısı
- `task-play.ts`: Component mantığı, görev/quiz tamamlama, ödül güncelleme, navigasyon.
- `task-play.html`: Görev/quiz arayüzü.
- `task-play.scss`: Stil dosyası.

## Son Güncellemeler
- XP güncellemesi doğrudan users koleksiyonunda yapılacak şekilde optimize edildi.
- Tüm console.log mesajları kaldırıldı.
- SPA navigasyonu ve hata yönetimi güçlendirildi.
