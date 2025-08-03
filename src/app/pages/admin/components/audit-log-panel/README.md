# src/app/pages/admin/components/audit-log-panel

Bu klasördeki TypeScript dosyaları ve modüller:

- audit-log-panel.ts: Firestore'dan denetim ve log kayıtlarını çeken, listeleyen ve CSV olarak dışa aktaran Angular standalone bileşeni.

Her dosyanın ve klasörün detaylı açıklaması aşağıda listelenmiştir:

## audit-log-panel.ts
- Firestore'dan 'audit_logs' koleksiyonunu asenkron olarak çeker ve listeler.
- Filtreleme, tablo ve liste gösterimi sağlar.
- Kayıtları CSV formatında dışa aktarma fonksiyonu içerir.
- Yalnızca yetkili kullanıcılar erişebilir (guard ile korumalıdır).
- Angular standalone bileşeni olarak CommonModule ve FormsModule ile çalışır.
