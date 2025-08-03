# components

Bu klasör, öğretmen modülüne ait bileşenleri ve alt bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: `teacher-dashboard` bileşenini dışa aktarır.

## Alt Klasörler ve .ts Dosyaları

### teacher-dashboard
- **teacher-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
