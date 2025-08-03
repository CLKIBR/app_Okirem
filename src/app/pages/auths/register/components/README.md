
# components

Bu klasör, register modülüne ait bileşenleri ve alt bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar

- **index.ts**: Bu dosya, `register-wolcome` ve `register-wizard` bileşenlerini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.

## Alt Klasörler ve .ts Dosyaları

### register-wizard
- **register-wizard.ts**: 
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Kullanıcı rolüne göre (örn. öğrenci, öğretmen) adımları dinamik olarak belirler.
  - Reactive Forms ile form oluşturur ve doğrulama yapar.
  - Firestore ile kullanıcı verisi kaydeder, Firebase Auth ile yeni kullanıcı oluşturur.
  - Kayıt işlemi tamamlandığında yönlendirme sağlar.
  - `ngOnInit` ile rol ve adımlar belirlenir, form dinamik olarak oluşturulur.
  - Servis ve router entegrasyonu ile tam kayıt akışı sunar.

### register-wolcome
- **register-wolcome.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Kullanıcı rolüne göre dinamik kartlar ve ikon renkleri sunar.
  - `getIconColor` fonksiyonu ile rol ve tema bazlı renk seçimi yapılır.
  - Router entegrasyonu ile kullanıcıyı ilgili kayıt adımına yönlendirir.
  - Arayüzde rol kartları ve yönlendirme işlemleri yönetilir.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
