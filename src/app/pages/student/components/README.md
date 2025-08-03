
# components

Bu klasör, öğrenci modülüne ait bileşenleri ve alt bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: Tüm alt bileşenleri dışa aktarır. Öğrenci modülünün bileşenlerinin diğer modüller tarafından kullanılmasını sağlar.

## Alt Klasörler ve .ts Dosyaları

### daily-tasks
- **daily-tasks.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Öğrenciye ait günlük görevleri listeler, tamamlanma durumunu ve ödülleri yönetir.
  - Firestore ile görev verilerini çeker, günceller ve sıralar.
  - Reactive state yönetimi için RxJS BehaviorSubject kullanır.
  - Hata ve yüklenme durumlarını yönetir.
  - Arayüzde görevlerin tamamlanma durumu ve ödül bilgisi gösterilir.

### home
- **home.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Firebase'den dersleri çeker ve arayüzde listeler.
  - Eğer veri yoksa örnek ders kartları gösterir.
  - Router ve LessonService entegrasyonu ile dinamik veri yönetimi sağlar.
  - Arayüzde ders kartları ve ders detayları sunulur.

### student-dashboard
- **student-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
