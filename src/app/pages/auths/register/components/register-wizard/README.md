# register-wizard

Bu klasör, kayıt işlemini adım adım yöneten sihirbaz bileşenini içerir.

## Dosyalar
- **register-wizard.ts**: Kayıt sihirbazı bileşenini tanımlar. Kullanıcı rolüne göre adımları belirler, Angular Reactive Forms ile form oluşturur, Firestore ve Auth ile kullanıcı kaydı yapar. Kayıt işlemi tamamlandığında yönlendirme sağlar.
- **register-wizard.html**: Sihirbazın arayüzünü tanımlar.
- **register-wizard.scss**: Sihirbazın stil dosyasıdır.

### Özellikler
- Dinamik rol tabanlı adımlar
- Reactive form ile doğrulama
- Firebase Auth ile kullanıcı oluşturma
- Firestore ile kullanıcı verisi kaydı
- Kayıt sonrası yönlendirme
