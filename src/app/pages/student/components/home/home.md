# Home Component

Bu dosya, öğrenci ana sayfası bileşeninin TypeScript kodunu içerir. Bileşen, ders kartlarını ve giriş/kayıt işlemlerini yönetir.

## Özellikler

- **lessonCards**: Öğrenciye ait derslerin başlık, tarih, süre, ikon ve arka plan renk geçişi bilgilerini tutar.
- **login()**: Giriş butonuna tıklanınca çalışır. Konsola bilgi yazar, istenirse giriş sayfasına yönlendirme eklenebilir.
- **goToSignup()**: Kayıt ol butonuna tıklanınca çalışır. Konsola bilgi yazar, istenirse kayıt sayfasına yönlendirme eklenebilir.
- **getIconColor(gradient: string)**: Kartın arka planına göre ikonun rengini belirler.

## Kullanılan Paketler
- Angular Core
- Angular Common
- Angular Router

## Dosya Yapısı
- `home.ts`: Bileşenin TypeScript kodu
- `home.html`: Bileşenin HTML şablonu
- `home.css`: Bileşenin stil dosyası

## Örnek lessonCards Dizisi
```typescript
lessonCards = [
  {
    title: 'Matematik',
    date: '2025.07.26',
    duration: '45 dakika',
    icon: 'mdi:math-compass',
    gradient: 'from-indigo-500 via-blue-500 to-cyan-400'
  },
  // ... diğer dersler ...
]
```

## Ek Bilgiler
- Bileşen standalone olarak tanımlanmıştır.
- İkonlar ve renkler, ders türüne göre özelleştirilmiştir.
- Yönlendirme işlemleri için Angular Router kullanılır.
