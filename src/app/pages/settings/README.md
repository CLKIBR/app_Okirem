# settings

Bu klasör, kullanıcı ayarları ve hesap işlemlerini yöneten modülleri ve bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: `account-settings` bileşenini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.
- **settings.routes.ts**: Ayarlar modülünün yönlendirme yapılandırmasını içerir. Hesap ayarları bileşenini dinamik olarak yükler ve başlık bilgisini içerir.

## Alt Klasörler ve .ts Dosyaları

### account-settings
- **account-settings.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Kullanıcı rolüne göre (student, teacher, parent) dinamik olarak çalışır.
  - Hesap silme (`deleteAccount`) ve veri silme (`eraseData`) işlemlerini API üzerinden gerçekleştirir.
  - HttpClient ile API'ye istek gönderir, başarılı işlemde yönlendirme ve bilgilendirme sağlar.
  - Hata yönetimi ile kullanıcıya uyarı gösterir.
  - Arayüz ve stil dosyaları ile hesap ayarları görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
