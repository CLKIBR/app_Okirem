# src/app/pages/parent

Bu klasör, veli (parent) kullanıcılar için sayfa ve bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar

- **index.ts**: `parent.router`, `parent.component` ve `components` modüllerini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.
- **parent.component.ts**: Ana parent bileşenini tanımlar. Angular'ın `@Component` dekoratörü ile, `parent.component.html` ve `parent.component.scss` dosyalarını kullanır. RouterOutlet ile alt bileşenlerin yönlendirilmesini sağlar.
- **parent.router.ts**: Parent modülünün yönlendirme yapılandırmasını içerir. Varsayılan olarak dashboard'a yönlendirir ve dashboard bileşenini yükler.

## Alt Klasörler ve .ts Dosyaları

### components
- **index.ts**: `parent-dashboard` bileşenini dışa aktarır.

#### parent-dashboard
- **parent-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
