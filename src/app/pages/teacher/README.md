# teacher

Bu klasör, öğretmen kullanıcılar için sayfa ve bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: `teacher.router`, `components` ve `teacher` modüllerini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.
- **teacher.ts**: Ana öğretmen bileşenini tanımlar. Angular'ın `@Component` dekoratörü ile, `teacher.html` ve `teacher.scss` dosyalarını kullanır. RouterOutlet ile alt bileşenlerin yönlendirilmesini sağlar.
- **teacher.router.ts**: Öğretmen modülünün yönlendirme yapılandırmasını içerir. Varsayılan olarak dashboard'a yönlendirir ve dashboard bileşenini yükler.

## Alt Klasörler ve .ts Dosyaları

### components
- **index.ts**: `teacher-dashboard` bileşenini dışa aktarır.

#### teacher-dashboard
- **teacher-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
