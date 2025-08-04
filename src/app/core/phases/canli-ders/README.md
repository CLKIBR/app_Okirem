
# Canlı Ders Modülü

Bu modül, Okirem platformunda canlı ders (video konferans) ve ders yönetimi işlevlerini sağlar.

## Dosya ve Yapı
- `canli-ders.ts`: Canlı ders arayüzü ve temel bileşen (Angular yeni standartlarına uygun).
- `canli-ders.module.ts`: Angular modül tanımı.
- `canli-ders.service.ts`: Canlı ders ile ilgili servis ve iş mantığı.
- `index.ts`: Modülün dışa aktarımı.

## Kullanım
- Router'da `/canli-ders` yoluna gidildiğinde bu modülün arayüzü açılır.
- Arayüzde ders başlatma, bitirme, katılımcı ekleme/çıkarma ve entegrasyon test fonksiyonları etkileşimli olarak kullanılabilir.

## Servis Fonksiyonları
- `baslat(dersAdi: string)`: Canlı ders başlatır.
- `bitir()`: Dersi sonlandırır.
- `katilimciEkle(ad: string)`: Katılımcı ekler.
- `katilimciCikar(ad: string)`: Katılımcı çıkarır.
- `getKatilimcilar()`: Katılımcı listesini döndürür.
- `entegrasyonTest()`: Video konferans entegrasyonunu başlatır (örnek).

## Geliştirme
- Video konferans, katılımcı yönetimi, ders akışı gibi ek özellikler ilerleyen aşamalarda eklenecektir.
