# components

Bu klasör, parent modülüne ait bileşenleri ve alt bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: Bu dosya, `parent-dashboard` bileşenini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.

## Alt Klasörler ve .ts Dosyaları

### parent-dashboard
- **parent-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
