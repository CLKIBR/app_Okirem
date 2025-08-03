# Okirem - Modern Eğitim Platformu Mimari ve Geliştirme Planı

## 1. Proje Vizyonu ve Temel Hedefler
- Oyunlaştırılmış, erişilebilir ve ölçülebilir öğrenim platformu
- 5-8. sınıf öğrencileri, öğretmen ve veliler için etkileşimli ve kişiselleştirilmiş deneyim
- Sürekli gelişen, açık kaynak ve topluluk katkısına açık yapı
- Mobil ve masaüstünde modern, hızlı ve erişilebilir kullanıcı arayüzü

---

## 2. Temel Teknolojiler ve Araçlar
- **Frontend:** Angular (standalone, v17+), TypeScript, TailwindCSS, RxJS, @iconify/angular ikon kütüphanesi
- **Backend & Data:** Firebase Firestore (NoSQL), Firebase Authentication, Firebase Storage
- **DevOps & CI/CD:** GitHub Actions ile otomatik build ve deploy, conventional commit, PR review zorunlu
- **Test:** Angular test (Jest), e2e (Cypress), minimum %80 coverage
- **Dokümantasyon:** Tüm modül ve servisler için .md formatında teknik dokümantasyon, onboarding rehberi

---

## 3. Kullanıcı Rolleri ve Erişim
- **Öğrenci:** Oyunlaştırılmış ders, görev, ödül ve gelişim ekranlarına erişim
- **Öğretmen:** Sınıf, öğrenci ve görev yönetimi, rapor ve analiz
- **Veli:** Çocuklarının ilerlemesini takip, bildirimler, raporlar

---

## 4. Ana Modüller & Sayfa Akışları

1. **Giriş/Kayıt (Onboarding Wizard)**
   - Rol seçimi, profil ve temel bilgiler
   - Öğrenciye: sınıf, favori ders, avatar
   - Öğretmene: okul, sınıf, branş
   - Veliye: öğrenci ile ilişkilendirme

2. **Dersler & Görevler**
   - Tüm branşlar için dinamik ders, ünite ve görev ekranları
   - Oyunlaştırılmış (puan, rozet, XP, streak) yapı
   - Görev tamamlama, anlık feedback, animasyonlu başarı bildirimi

3. **Profil ve Kişiselleştirme**
   - Avatar seçimi, tema, başarı rozetleri, gelişim grafikleri
   - Öğrenciye hedef belirleme ve öneriler

4. **Ödül Sistemi & Mağaza**
   - XP ve coin ile avatar/parça satın alma, rozetler, mağaza entegrasyonu
   - Liderlik tablosu, seviye ve ödül geçmişi

5. **Öğretmen/Veli Paneli**
   - Öğrenci takibi, görev atama, gelişim raporu
   - Bildirim ve öneri mekanizmaları

6. **Bildirim & Duyuru Sistemi**
   - Görev/ödül bildirimleri (push/email)
   - Duyuru ve önemli gelişmeler

---

## 5. Teknik Mimaride Katmanlar

- **src/app/features/**  
  Her ana modül için ayrı klasör (örn: `tasks/`, `profile/`, `leaderboard/`, `dashboard/`)
- **src/app/shared/**  
  Reusable UI component, pipe, directive, utility fonksiyonları
- **src/app/core/**  
  AuthGuard, interceptor, state management (signal veya service pattern)
- **src/environments/**  
  Firebase config ve tüm gizli bilgiler (env üzerinden)
- **assets/**  
  SVG ikon, görsel ve statik medya

---

## 6. Firebase Veri Modeli (Özet)

- **users** (collection)  
  - id, role, name, class, school, avatar, xp, badges, completedTasks, createdAt
- **lessons**  
  - id, title, grade, description, units
- **units**  
  - id, lessonId, title, order, tasks
- **tasks**  
  - id, unitId, type (test, quiz, puzzle, vs.), content, answer, xp, assignedUsers
- **reports**  
  - id, userId, taskId, date, score, details
- **awards**  
  - id, name, description, icon, earnedBy
- **notifications**  
  - id, userId, type, message, createdAt, read

---

## 7. Geliştirme & Sürdürülebilirlik

- Her feature/component için bağımsız klasör, dosya isimlerinde component kelimesi yok
- Routing, lazy-load ve role-based guard yapısı
- Tüm üçüncü parti paketler güncel ve güvenlik denetimli
- API anahtarları/gizli bilgiler env dosyasında tutulur, gitignore’da gizli
- Yüksek test coverage (%80+), CI/CD’de test zorunlu
- Kod ve dokümantasyon güncelliği zorunlu, her PR'da ilgili .md dosya güncellemesi

---

## 8. Yol Haritası & Gelişim

- **MVP:** Giriş/kayıt, ana ders modülü, temel ödül sistemi, öğrenci paneli, öğretmen paneli
- **Faz 2+:** Gelişmiş bildirim, veli paneli, gelişmiş raporlar, topluluk özellikleri, animasyon/mikro oyunlar
- **Sürekli Gelişim:** Kullanıcı geri bildirimi, A/B test, yeni ders/ünite/görev ekleme, UI/UX güncellemeleri

---

## 9. Yasal ve Etik Standartlar

- KVKK/GDPR uyumlu veri yönetimi
- Açık kaynak lisans, tüm bağımlılıklarda yasal ve güvenli kullanım
- Kullanıcı verisinde gizlilik ve güvenlik öncelikli

---

## 10. Dokümantasyon ve Onboarding

- `README.md` — Proje kurulumu, temel kullanım ve mimari özet
- `ONBOARDING.md` — Yeni geliştiriciler için hızlı başlangıç ve iş akışı
- `PLAN.md` & `ROADMAP.md` — Yol haritası, hedefler, iş bölümü, geliştirme süreçleri
- Her modül/component/service için ayrı .md teknik dokümantasyon

---

> Bu plan, modern Angular + Firebase tabanlı, oyunlaştırılmış ve sürdürülebilir bir eğitim platformu için sağlam ve sürekli geliştirilebilir temel sunar.  
> Her bölüm, ihtiyaca göre detaylandırılıp güncellenebilir.

