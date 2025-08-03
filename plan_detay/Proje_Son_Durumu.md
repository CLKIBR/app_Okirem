# Okirem Projesi Özellikleri (Detaylı Teknik Rapor)

Bu dosya, src klasörü ve 4 derinliğe kadar alt klasörlerdeki tüm mevcut README.md dosyalarından derlenen projenin ana ve alt klasörlerinin işlevini, her component/servis/modülün ne işe yaradığını, kodun işlevsel ve arayüzdeki rolünü, klasörleme mantığını ve modüler yapıyı teknik ve anlaşılır bir dilde açıklar.

## 1. Klasörleme Mantığı ve Modüler Yapı
- Proje, rollere (öğrenci, öğretmen, veli, yönetici) ve işlevlere göre ayrılmış, her modül kendi bileşen, servis ve yönlendirme dosyalarını içerir.
- Her ana klasör (ör. `student`, `teacher`, `parent`, `auths/register`, `settings`, `shared/legal`) altında, ilgili işlevi sağlayan standalone Angular bileşenleri ve modülleri bulunur.
- Alt klasörler, arayüzdeki bölümleri ve işlevsel ayrımları yansıtır (örn. dashboard, daily-tasks, account-settings).

## 2. Her Ana ve Alt Klasörün İşlevi
- **student/**: Öğrenciye özel sayfa ve bileşenler. Navigasyon, günlük görevler, dersler, dashboard, oturum yönetimi.
- **teacher/**: Öğretmene özel sayfa ve bileşenler. Dashboard, oturum yönetimi, çıkış fonksiyonu, arayüz ve stil yönetimi.
- **parent/**: Veliye özel sayfa ve bileşenler. Dashboard, oturum yönetimi, öğrenci takibi, bildirimler.
- **auths/register/**: Kayıt işlemleri, rol tabanlı adımlar, reactive form, Firestore ve Auth ile kullanıcı kaydı, yönlendirme.
- **settings/**: Kullanıcı ayarları ve hesap işlemleri. Hesap silme, veri silme, hata yönetimi, arayüz.
- **shared/legal/**: Yasal belgeler ve metinler. Her alt klasörde (accessibility, consent, contact, cookie, copyright, disclaimer, dpa, policy, security, sla, terms) standalone Angular bileşenleri ile yasal metin ve arayüz sunumu.

## 3. Component, Servis ve Modül İşlevleri
- Her bileşen Angular `@Component` ile standalone olarak tanımlanmış, ilgili arayüz ve stil dosyalarını kullanır.
- Servisler (örn. AuthService, LessonService) ile oturum yönetimi, veri çekme/güncelleme, API entegrasyonu sağlanır.
- Modüller, ilgili bileşenleri ve servisleri dışa aktarır, merkezi erişim ve yeniden kullanılabilirlik sunar.
- Router dosyaları, modül içi ve modüller arası yönlendirme ve sayfa yüklemesini yönetir.

## 4. Kodun İşlevsel ve Arayüzdeki Rolü
- Her bileşen, arayüzde ilgili rolün (öğrenci, öğretmen, veli) ihtiyaçlarını karşılayacak şekilde tasarlanmıştır.
- Dashboard bileşenleri, oturum yönetimi ve çıkış fonksiyonu ile kullanıcıya özet ve bildirim sunar.
- Daily-tasks, home, account-settings gibi bileşenler, dinamik veri yönetimi, hata ve yüklenme durumları, kullanıcıya özel arayüz sunar.
- Yasal bileşenler, metin ve arayüz sunumu ile yasal gereklilikleri karşılar.

## 5. Örnek Açıklamalar
- `student/components/daily-tasks/daily-tasks.ts`: Öğrenciye ait günlük görevleri listeler, tamamlanma ve ödül yönetimi sağlar, Firestore ile veri çeker/günceller, RxJS ile state yönetimi yapar.
- `teacher/components/teacher-dashboard/teacher-dashboard.ts`: Öğretmen dashboard, oturum yönetimi, çıkış fonksiyonu, arayüz ve stil dosyaları ile dashboard görünümü.
- `settings/account-settings/account-settings.ts`: Kullanıcı rolüne göre hesap ve veri silme işlemleri, API entegrasyonu, hata yönetimi, arayüz.
- `auths/register/components/register-wizard/register-wizard.ts`: Kayıt sihirbazı, rol tabanlı adımlar, reactive form, Firestore ve Auth ile kullanıcı kaydı, yönlendirme.

---
Her klasör, component, servis ve modülün koduna ve işlevine dair açıklamalar ilgili README.md dosyalarında yer alır. Proje; modüler yapı, rollere özel sayfa ve bileşenler, yasal doküman yönetimi, tema/stil altyapısı, statik dosya yönetimi ve harici kütüphane entegrasyonları ile profesyonel, sürdürülebilir ve geliştirici dostu bir mimariye sahiptir.
# Okirem Projesi Özellikleri (Detaylı Teknik Rapor)

Bu dosya, src klasörü ve 4 derinliğe kadar alt klasörlerdeki tüm README.md dosyalarından derlenen projenin ana ve alt klasörlerinin işlevini, her component/servis/modülün ne işe yaradığını, kodun işlevsel ve arayüzdeki rolünü, klasörleme mantığını ve modüler yapıyı teknik ve anlaşılır bir dilde açıklar.

## 1. Klasörleme Mantığı ve Modüler Yapı
- Proje, rollere (öğrenci, öğretmen, veli, yönetici) ve işlevlere göre ayrılmış, her modül kendi bileşen, servis ve yönlendirme dosyalarını içerir.
- Her ana klasör (ör. `student`, `teacher`, `parent`, `auths/register`, `settings`, `shared/legal`, `admin`, `core`, `icons`, `features`, `components`, `scss`, `environments`, `assets`) altında, ilgili işlevi sağlayan standalone Angular bileşenleri ve modülleri bulunur.
- Alt klasörler, arayüzdeki bölümleri ve işlevsel ayrımları yansıtır (örn. dashboard, daily-tasks, account-settings, audit-log-panel, lesson, unit-manager, topic-manager).

## 2. Her Ana ve Alt Klasörün İşlevi
- **student/**: Öğrenciye özel sayfa ve bileşenler. Navigasyon, günlük görevler, dersler, dashboard, oturum yönetimi.
- **teacher/**: Öğretmene özel sayfa ve bileşenler. Dashboard, oturum yönetimi, çıkış fonksiyonu, arayüz ve stil yönetimi.
- **parent/**: Veliye özel sayfa ve bileşenler. Dashboard, oturum yönetimi, öğrenci takibi, bildirimler.
- **auths/register/**: Kayıt işlemleri, rol tabanlı adımlar, reactive form, Firestore ve Auth ile kullanıcı kaydı, yönlendirme.
- **settings/**: Kullanıcı ayarları ve hesap işlemleri. Hesap silme, veri silme, hata yönetimi, arayüz.
- **shared/legal/**: Yasal belgeler ve metinler. Her alt klasörde (accessibility, consent, contact, cookie, copyright, disclaimer, dpa, policy, security, sla, terms) standalone Angular bileşenleri ile yasal metin ve arayüz sunumu.
- **admin/**: Yönetici paneli, denetim, dashboard, ders, ünite, konu yönetimi, log paneli ve ilgili modüller.
- **core/**: Temel servisler, guardlar, providerlar, wizard modülleri.
- **icons/**: Projeye özel ikon tanımları ve ikon bileşenleri.
- **features/**: Projenin ana özellik modülleri.
- **components/**: Ortak ve dokümantasyon bileşenleri.
- **scss/**: Tüm tema ve stil dosyaları.
- **environments/**: Uygulamanın çalışma ortamı ayarları.
- **assets/**: Statik dosyalar, görseller, fontlar ve SVG'ler.

## 3. Component, Servis ve Modül İşlevleri
- Her bileşen Angular `@Component` ile standalone olarak tanımlanmış, ilgili arayüz ve stil dosyalarını kullanır.
- Servisler (örn. AuthService, LessonService) ile oturum yönetimi, veri çekme/güncelleme, API entegrasyonu sağlanır.
- Modüller, ilgili bileşenleri ve servisleri dışa aktarır, merkezi erişim ve yeniden kullanılabilirlik sunar.
- Router dosyaları, modül içi ve modüller arası yönlendirme ve sayfa yüklemesini yönetir.
- Modal bileşenler ile ekleme, güncelleme, silme işlemleri dinamik ve kullanıcı dostu şekilde sunulur.

## 4. Kodun İşlevsel ve Arayüzdeki Rolü
- Her bileşen, arayüzde ilgili rolün (öğrenci, öğretmen, veli, yönetici) ihtiyaçlarını karşılayacak şekilde tasarlanmıştır.
- Dashboard bileşenleri, oturum yönetimi ve çıkış fonksiyonu ile kullanıcıya özet ve bildirim sunar.
- Daily-tasks, home, account-settings gibi bileşenler, dinamik veri yönetimi, hata ve yüklenme durumları, kullanıcıya özel arayüz sunar.
- Yasal bileşenler, metin ve arayüz sunumu ile yasal gereklilikleri karşılar.
- Admin paneli, denetim ve yönetim işlemlerini, log ve raporlama modülleriyle destekler.

## 5. Örnek Açıklamalar
- `student/components/daily-tasks/daily-tasks.ts`: Öğrenciye ait günlük görevleri listeler, tamamlanma ve ödül yönetimi sağlar, Firestore ile veri çeker/günceller, RxJS ile state yönetimi yapar.
- `teacher/components/teacher-dashboard/teacher-dashboard.ts`: Öğretmen dashboard, oturum yönetimi, çıkış fonksiyonu, arayüz ve stil dosyaları ile dashboard görünümü.
- `settings/account-settings/account-settings.ts`: Kullanıcı rolüne göre hesap ve veri silme işlemleri, API entegrasyonu, hata yönetimi, arayüz.
- `auths/register/components/register-wizard/register-wizard.ts`: Kayıt sihirbazı, rol tabanlı adımlar, reactive form, Firestore ve Auth ile kullanıcı kaydı, yönlendirme.
- `admin/components/unit-manager/unit-manager.ts`: Ünite ekleme, güncelleme, silme ve listeleme işlemleri, modal bileşenlerle yönetim.
- `admin/components/dashboard/dashboard.component.ts`: Admin paneli için özet, istatistik, hızlı erişim ve grafik bileşenleri, Chart.js entegrasyonu.

---
Her klasör, component, servis ve modülün koduna ve işlevine dair açıklamalar ilgili README.md dosyalarında yer alır. Proje; modüler yapı, rollere özel sayfa ve bileşenler, yasal doküman yönetimi, tema/stil altyapısı, statik dosya yönetimi ve harici kütüphane entegrasyonları ile profesyonel, sürdürülebilir ve geliştirici dostu bir mimariye sahiptir.
