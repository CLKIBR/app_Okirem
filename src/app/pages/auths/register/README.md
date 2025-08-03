# src/app/pages/auths/register

 # Register Module
 
 Bu klasör, kullanıcıların kayıt işlemlerini yöneten modülleri ve bileşenleri içerir. Tüm dosyalar ve alt klasörler %100 kod uyumluluğu ile aşağıda açıklanmıştır.
 
 ## Dosyalar
 
 - **index.ts**: Register modülünün ana dışa aktarma dosyasıdır. `components`, `register`, ve `register.router` modüllerini dışa aktarır.
 - **register.ts**: Register ana bileşenini tanımlar. Angular'ın `@Component` dekoratörü ile, `register.html` ve `register.css` dosyalarını kullanır. Kayıt sayfasının temel görünümünü ve işlevselliğini sağlar.
 - **register.router.ts**: Register modülünün yönlendirme yapılandırmasını içerir. `register-wolcome` ve dinamik olarak yüklenen `register-wizard` bileşenlerini yönlendirir.
 - **register.html / register.css**: Kayıt sayfasının HTML ve stil dosyalarıdır.
 
 ## Alt Klasörler
 
 ### components
 Register modülüne ait bileşenleri içerir.
 - **index.ts**: `register-wolcome` ve `register-wizard` bileşenlerini dışa aktarır.
 
 #### register-wizard
 Kayıt işlemini adım adım yöneten sihirbaz bileşenini içerir.
 - **register-wizard.ts**: Kayıt sihirbazı bileşenini tanımlar. Kullanıcı rolüne göre adımları belirler, Angular Reactive Forms ile form oluşturur, Firestore ve Auth ile kullanıcı kaydı yapar. Kayıt işlemi tamamlandığında yönlendirme sağlar.
 - **register-wizard.html / register-wizard.scss**: Sihirbazın arayüzünü ve stilini tanımlar.
 
 #### register-wolcome
 Kayıt ekranının karşılama bileşenini içerir.
 - **register-wolcome.ts**: Karşılama bileşenini tanımlar. Kullanıcı rolüne göre kartlar ve ikon renkleri sunar, yönlendirme işlemlerini yönetir.
 - **register-wolcome.html / register-wolcome.css**: Karşılama ekranının arayüzünü ve stilini tanımlar.
 
 ---
 Her alt klasörde, ilgili bileşenin koduna ve işlevine dair açıklamalar README.md dosyasında yer alır.

## register.component.ts
- Kullanıcıdan e-posta, şifre ve diğer bilgileri alır, yeni kullanıcı oluşturur.
- Hatalı veya eksik girişlerde uyarı ve hata mesajı gösterir.
- Başarılı kayıtta yönlendirme sağlar.
