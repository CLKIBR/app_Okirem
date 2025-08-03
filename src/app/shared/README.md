# src/app/shared

Bu klasördeki TypeScript dosyaları ve modüller:

- admin-footer/: Yönetici paneli alt bilgi bileşeni.
- admin-header/: Yönetici paneli üst bilgi bileşeni.
- base/: Temel bileşenler ve yardımcı modüller.
- charts/: Grafik ve görselleştirme bileşenleri.
- forms/: Form bileşenleri ve doğrulama modülleri.

### admin-footer.ts
  - Angular `@Component` ile tanımlanmış, `FooterComponent`'i genişletir.
  - Uygulamanın yönetici paneli için özel footer bileşenidir.
  - Arayüz ve stil dosyaları ile özelleştirilebilir.
- home-navbar/: Ana sayfa navigasyon bileşeni.
- icons/: Ortak ikon bileşenleri.
- legal/: Yasal belgeler ve metinler.

### admin-header.ts
  - Angular `@Component` ile tanımlanmış, `HeaderComponent`'i genişletir.
  - Oturum yönetimi ve yönlendirme için `AuthService` ve `Router` kullanır.
  - Avatar, dropdown, navigasyon ve tema yönetimi gibi gelişmiş header özellikleri sunar.
  - Arayüzde yöneticiye özel menü ve kullanıcı işlemleri bulunur.
- notifications/: Bildirim ve uyarı bileşenleri.
- pages/: Ortak sayfa bileşenleri.
- theme/: Tema ve stil yönetimi modülleri.
- widgets/: Widget ve yardımcı bileşenler.
- index.ts: Ortak modüllerin dışa aktarımı.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## admin-footer/
- Yönetici paneli alt bilgi bileşeni.

## admin-header/
- Yönetici paneli üst bilgi bileşeni.

## base/

### home-navbar.ts
  - Angular `@Component` ile tanımlanmış, standalone bir bileşendir.
  - Ana sayfa için özel navbar bileşenidir.
  - Oturum ve yönlendirme işlemleri için `AuthService` ve `Router` kullanır.
  - Giriş, kayıt ve admin paneline geçiş fonksiyonları içerir.
- Temel bileşenler ve yardımcı modüller.

## buttons/
- Farklı tipte buton bileşenleri ve stilleri.

## charts/

### index.ts
  - Tüm yasal doküman bileşenlerini ve legal.routes modülünü dışa aktarır.
### legal.routes.ts
  - Yasal doküman sayfalarının yönlendirme yapılandırmasını içerir.
  - Her bir yasal doküman (gizlilik, çerez, telif, vs.) için dinamik bileşen yüklemesi sağlar.
  - Tüm yasal sayfalar ayrı modüller olarak yönetilir ve merkezi erişim sunar.
- Grafik ve görselleştirme bileşenleri.

## forms/
- Form bileşenleri ve doğrulama modülleri.

## home-navbar/
- Ana sayfa navigasyon bileşeni.

## icons/
- Ortak ikon bileşenleri.

## legal/
- Yasal belgeler ve metinler (gizlilik, kullanım, veri saklama).

## notifications/
- Bildirim ve uyarı bileşenleri.

## pages/
- Ortak sayfa bileşenleri.

## theme/
- Tema ve stil yönetimi modülleri.

## widgets/
- Widget ve yardımcı bileşenler.

## index.ts
- Tüm shared modüllerinin dışa aktarımı ve merkezi erişim noktası.
