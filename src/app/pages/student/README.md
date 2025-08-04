# student

Bu klasör, öğrenci kullanıcılar için sayfa ve bileşenleri içerir. Tüm .ts dosyaları ve alt klasörlerdeki .ts dosyaları %100 kod uyumluluğu ile aşağıda açıklanmıştır.

## Dosyalar
- **index.ts**: `student.router`, `student`, ve `components` modüllerini dışa aktarır. Modülün dışa açılması ve diğer modüller tarafından kullanılmasını sağlar.
- **student.ts**: Ana öğrenci bileşenini tanımlar. Navigasyon, layout ve scroll yönetimi sağlar. Tüm alt bileşenleri ve modülleri Angular standalone olarak entegre eder.
- **student-nav.ts**: Öğrenci paneli için navigasyon verilerini ve ikonlarını tanımlar. Tüm menü ve ikon yapılandırması burada yönetilir.
- **student.router.ts**: Öğrenci modülünün yönlendirme yapılandırmasını içerir. Dashboard ve ayarlar gibi alt sayfaları yönlendirir.

## Alt Klasörler ve .ts Dosyaları

### components
- **index.ts**: Tüm alt bileşenleri dışa aktarır.

#### daily-tasks
- **daily-tasks.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Öğrenciye ait günlük görevleri listeler, tamamlanma durumunu ve ödülleri yönetir.
  - Firestore ile görev verilerini çeker ve günceller.
  - Reactive state yönetimi için RxJS BehaviorSubject kullanır.
  - Hata ve yüklenme durumlarını yönetir.

#### home
- **home.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Firebase'den dersleri çeker ve arayüzde listeler.
  - Eğer veri yoksa örnek ders kartları gösterir.
  - Router ve LessonService entegrasyonu ile dinamik veri yönetimi sağlar.


#### student-dashboard
- **student-dashboard.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - `AuthService` ile oturum yönetimi sağlar.
  - `logout()` fonksiyonu ile kullanıcıyı çıkış yaptırır ve ana sayfaya yönlendirir.
  - Arayüz ve stil dosyaları ile dashboard görünümünü sunar.
  - Dashboard arayüzünde günlük görevler (`daily-tasks` bileşeni) doğrudan sergilenir.

#### task-play
- **task-play.ts**:
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Kullanıcı bir göreve tıkladığında ilgili quiz veya oyun arayüzünü gösterir.
  - Görev tipi ve hedefi router ile alınır, arayüzde uygun içerik sunulur.

---
Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.
