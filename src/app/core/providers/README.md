# src/app/core/providers

Bu klasördeki TypeScript dosyaları ve modüller:

- firebase.providers.ts: Firebase servislerini (App, Firestore, Auth, Storage) Angular uygulamasına sağlayan provider dizisi.
- index.ts: Provider modüllerinin dışa aktarımı.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## firebase.providers.ts
- AngularFire ile Firebase App, Firestore, Auth ve Storage servislerini başlatır ve uygular.
- `environment.firebase` yapılandırmasını kullanarak uygulama başlatılır.
- Tüm servisler Angular DI ile merkezi olarak sağlanır.
- Uygulama genelinde Firestore, Authentication ve Storage erişimi sağlar.

## index.ts
- Tüm provider modüllerini dışa aktarır (şu anda sadece firebase.providers.ts).
