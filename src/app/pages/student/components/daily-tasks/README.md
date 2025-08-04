# daily-tasks

## Amaç
Öğrenciye ait günlük görevleri listeler, görevlerin tamamlanma ve ödül yönetimini sağlar. Firestore ile veri çekme/güncelleme, RxJS ile state yönetimi ve Angular Router ile SPA navigasyonu sunar.

## Özellikler
- Aktif, tamamlanan ve süresi geçmiş görevleri ayrı kategorilerde gösterir.
- Kullanıcı arayüzünde görev kategorileri arasında geçiş için butonlar sunar.
- Aktif görevler için "Başla" butonu, tamamlanan ve süresi geçmiş görevler için bilgilendirme sunar.
- Görev tamamlanınca ilgili ödül (XP/Coin) güncellenir ve dashboard'a yönlendirme yapılır.
- Firestore'dan görev ve kullanıcı verisi çeker, XP güncellemesini doğrudan users koleksiyonunda yapar.
- RxJS BehaviorSubject ile görev, yüklenme ve hata durumlarını yönetir.
- SPA navigasyonu ve hata yönetimi.

## Kullanılan Teknolojiler
- Angular Standalone Component
- RxJS
- Firestore
- Angular Router
- TypeScript

## Dosya Yapısı
- `daily-tasks.ts`: Component mantığı, görev filtreleme, ödül güncelleme, state yönetimi.
- `daily-tasks.html`: Görev kategorileri arayüzü, butonlar, görev listeleri.
- `daily-tasks.scss`: Stil dosyası.

## Son Güncellemeler
- Aktif, tamamlanan ve süresi geçmiş görevler için ayrı butonlar ve görünümler eklendi.
- Tüm console.log mesajları kaldırıldı.
- XP güncellemesi doğrudan users koleksiyonunda yapılacak şekilde optimize edildi.
- SPA navigasyonu ve hata yönetimi güçlendirildi.
