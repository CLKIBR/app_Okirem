# account-settings

Bu klasör, kullanıcı hesap ayarları işlemlerini yöneten bileşeni içerir. Tüm .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **account-settings.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Kullanıcı rolüne göre (student, teacher, parent) dinamik olarak çalışır.
  - Hesap silme (`deleteAccount`) ve veri silme (`eraseData`) işlemlerini API üzerinden gerçekleştirir.
  - HttpClient ile API'ye istek gönderir, başarılı işlemde yönlendirme ve bilgilendirme sağlar.
  - Hata yönetimi ile kullanıcıya uyarı gösterir.
  - Arayüz ve stil dosyaları ile hesap ayarları görünümünü sunar.

---
Her dosyanın koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
