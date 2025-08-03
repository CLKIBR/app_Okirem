# src/app/pages/admin

Bu klasördeki TypeScript dosyaları ve modüller:

- admin.ts: Admin panel ana bileşeni, layout ve navigasyon yönetimi.
- admin.routes.ts: Admin paneli için route tanımları ve guard entegrasyonu.
- index.ts: Admin modüllerinin dışa aktarımı.
- _nav.ts: Admin paneli için navigasyon menü tanımları.
- components/: Admin paneline ait alt bileşenler (dashboard, audit-log-panel, lesson, unit-manager, topic-manager, vs.).

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## admin.ts
- Admin panelinin ana bileşeni. Layout, sidebar, header, footer ve navigasyon yönetimi sağlar.
- CoreUI Angular ve özel shared bileşenlerle entegre çalışır.

## admin.routes.ts
- Admin paneli için route tanımlarını içerir.
- Dashboard, audit-log-panel, lesson, unit, topic, forms, icons, notifications, widgets gibi alt modüllere yönlendirme sağlar.
- AuditLogGuard ile denetim ve erişim kontrolü uygular.

## index.ts
- Admin paneline ait tüm modüllerin dışa aktarımı.

## _nav.ts
- Admin paneli için navigasyon menü ve alt menü tanımlarını içerir.
- INavData ile menü yapısı, ikonlar ve badge özellikleri tanımlanır.

## components/
- Dashboard, audit-log-panel, lesson, unit-manager, topic-manager gibi admin paneline ait alt bileşenler ve modüller.
