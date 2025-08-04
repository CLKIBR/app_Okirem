# src/app/core

Bu klasördeki TypeScript dosyaları ve modüller:

- guards/: Yetkilendirme ve erişim kontrolü sağlayan guard modülleri.
- providers/: Uygulama genelinde kullanılan provider servisleri.
- services/: Temel iş mantığı ve veri yönetimi servisleri.
- wizard/: Adım adım ilerleyen sihirbaz modülleri.
- index.ts: Çekirdek modüllerin dışa aktarımı.

- phases/: Proje fazlarına göre ayrılmış ana modüller ve alt modüller.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## guards/
- Kullanıcı yetkilendirme, oturum kontrolü ve erişim kısıtlamaları için guard dosyaları.

## providers/
- Uygulama genelinde kullanılacak provider servisleri ve bağımlılık yönetimi.

## services/
- Veri yönetimi, API entegrasyonu ve iş mantığı servisleri.

## wizard/
- Adım adım ilerleyen süreçler ve kullanıcı yönlendirme modülleri.

## index.ts
- Tüm core modüllerinin dışa aktarımı ve merkezi erişim noktası.

## phases/
- Proje fazlarına göre modüller burada yer alır. Örnek: Canlı ders, materyal yönetimi, quiz/test vb.

### Canlı ders
- Canlı ders modülü, video konferans ve ders yönetimi için temel bileşenleri içerir. `canli-ders.module.ts`, `canli-ders.ts`, `canli-ders.service.ts` dosyaları ile başlatılmıştır.
