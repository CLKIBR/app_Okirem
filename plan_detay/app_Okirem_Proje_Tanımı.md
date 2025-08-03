# app_Okirem Proje Tanımı

**Okirem**, 1-8. sınıf öğrencilerine, öğretmenlere ve velilere yönelik, dersleri oyunlaştırılmış, etkileşimli, erişilebilir ve sürdürülebilir bir öğrenme platformudur.  
Hedefimiz; eğitimde motivasyonu ve kalıcı öğrenmeyi artırmak, dijital çağın gerektirdiği becerilerle donatılmış nesiller yetiştirmek ve eğitimde fırsat eşitliğini güçlendirmektir.

---

## 1. Vizyon
Platformun vizyonu; öğrenci, öğretmen ve veli etkileşimini modern, eğlenceli ve erişilebilir hale getirerek eğitimde ölçülebilir gelişim, takip ve kişiselleştirilmiş deneyim sunmaktır.

---

## 2. Temel Fonksiyonlar ve Modüller
- Oyunlaştırılmış ders modülleri, görevler ve dinamik içerikler
- Puan, seviye, rozet, ödül mağazası ve liderlik tablosu
- Kişiye özel günlük görevler, raporlar ve gelişim izleme
- Profil, hesap ve rol yönetimi (öğrenci, öğretmen, veli)
- Öğretmen/veli paneli, takip ve yönetim araçları
- Modern, sade, mobil ve masaüstünde tam uyumlu arayüz
- Yüksek performans (%99.9 uptime, hızlı yüklenme), veri gizliliği ve otomatik yedekleme

---

## 3. Minimum Viable Product (MVP)
- Temel kullanıcı kaydı/girişi
- Ders modülü, görev oynama ve ödül sistemi
- Öğrenci/öğretmen/veli paneli
- Liderlik tablosu ve kullanıcı profili

---

## 4. Kalite ve Güvenlik Hedefleri
- Kodda sürdürülebilirlik ve güvenli üçüncü parti paket kullanımı
- Tüm kullanıcı verilerinde KVKK/GDPR uyumluluğu
- Erişilebilir, responsive ve optimize edilmiş arayüzler
- Otomatik yedekleme ve veri kurtarma

---

## 5. Riskler ve Başarı Kriterleri
- Offline modüller ve bağlantı sorunlarında kullanıcı deneyimini koruyacak çözümler
- Başarı ölçütü: İlk fazda yüksek kullanıcı katılımı, pilot uygulamalar ve hızlı iterasyon

---

## 6. Lisans & Açık Kaynak Politikası
- Kullanılan kod/dokümantasyon/modüllerin lisansları açıkça belirtilecek, topluluk katkısına açık olacak

---

## 7. Sürdürülebilirlik
- Proje, sürekli güncelleme, topluluk ve açık kaynak katkısı ile uzun vadeli bakım ve geliştirme planına sahiptir.

---

## 8. Kullanılan Teknolojiler

- **Frontend:** Angular  
  Modern, hızlı ve ölçeklenebilir web uygulamaları geliştirmek için Angular framework’ü kullanılmaktadır.

- **Backend & Database:** Firebase  
  Gerçek zamanlı veri tabanı, kimlik doğrulama, bulut fonksiyonları ve barındırma hizmetleri için Google Firebase altyapısı kullanılacaktır. Firebase ile otomatik ölçeklenebilirlik, güvenli veri yönetimi ve yüksek uptime sağlanacaktır.

---

## 9. Öğrenme Materyallerinin Hazırlanması ve Yönetimi

Platformda öğrenciler için çeşitli ders çalışma materyalleri hazırlanacak ve yönetilecektir.  
Bu materyallerin türleri ve hazırlanma/saklama süreçleri aşağıdaki gibi olacak:

- **Quiz ve Kalıp Sorular:**  
  Quizler ve çoktan seçmeli sorular, sistemde JSON veri modelleriyle hazırlanacak ve Firestore’da saklanacaktır. Sorular; metin, seçenekler, doğru cevap ve açıklama gibi alanları içerecek. Öğretmenler kolayca soru ekleyip düzenleyebilecek.

- **PDF Formatında Konu Tarama, Yaprak Test, Çalışma Kağıtları:**  
  PDF ders materyalleri (konu özetleri, testler, denemeler) dışarıda hazırlanıp Angular arayüzü üzerinden Firebase Storage’a yüklenecek. Metadata (başlık, açıklama, konu, sınıf düzeyi vs.) Firestore’da tutulacak. Öğrenciler PDF’lere erişip indirebilecek veya platformda görüntüleyebilecek.

- **Görsel Anlatımlı Materyaller:**  
  PNG/JPG gibi görsel dosyalar, infografikler ve açıklayıcı şemalar Storage’da saklanacak, metadata’sı Firestore’da tutulacak. Derslerin ilgili bölümlerinde görsel anlatımlar kullanılacak.

- **Video Anlatımlar:**  
  Ders videoları, animasyonlar veya öğretmen anlatımları MP4 formatında hazırlanıp Firebase Storage’da tutulacak. Videoların başlığı, açıklaması, süresi gibi bilgiler Firestore’da kayıt altında olacak. Video oynatıcı ile öğrenciler izleyebilecek.

- **Materyal Yönetimi ve Erişim:**  
  Öğretmen ve adminler, Angular arayüzü ile yeni materyal ekleyebilecek, düzenleyebilecek ve ilgili ders/sınıfa atayabilecek. Materyallere rol bazlı erişim yetkilendirmesi sağlanacak.  
  Tüm materyaller mobil ve masaüstü uyumlu şekilde sunulacak.

---

## 10. Ek Profesyonel Yaklaşımlar

- Ölçeklenebilir ve sürdürülebilir mimari (Angular + Firebase ile bulut tabanlı altyapı)
- Gelişmiş analitik ve kullanıcı davranışı takibi
- Okul yönetim sistemleri gibi üçüncü parti entegrasyonlara açık API altyapısı
- Topluluk katkısı için açık kaynak desteği ve katkı rehberi
- KVKK/GDPR yanında COPPA gibi uluslararası standartlara uyumluluk hedefi
- Eğitim içeriği standartları ve pedagojik danışmanlık mekanizmaları
- Engelli kullanıcılar için erişilebilirlik ve çoklu dil desteği
- Yasal ve etik çerçeve (kullanıcı sözleşmeleri, içerik moderasyonu)
- Projenin sosyal etkisi için yıllık etki raporu ve sürdürülebilirlik göstergeleri

---

## 11. Gelişmiş ve Yenilikçi Ek Modüller

### 11.1 Canlı Ders ve Etkileşimli Sınıf Modülleri
- Platformda canlı dersler, video konferans, anlık chat, forum ve grup tartışma alanları sunulacaktır.
- Öğrenciler ve öğretmenler gerçek zamanlı etkileşimle öğrenme deneyimini zenginleştirebilir.

### 11.2 Ödev Teslim ve Otomatik Değerlendirme
- Öğrenciler, ödevlerini sisteme yükleyebilir, öğretmenler değerlendirme yapabilir.
- Otomatik değerlendirme altyapısı ile test ve quizler hızlı şekilde puanlanabilir.

### 11.3 Kapsamlı İçerik Editörü
- Öğretmenler için metin, görsel, video ve interaktif bileşenleri kolayca ekleyebilecekleri zengin içerik editörü sunulacaktır.

### 11.4 İletişim ve Bildirim Sistemleri
- Sistem içi mesaj, e-posta ve mobil bildirim altyapısı ile kullanıcıya duyuru ve bilgilendirme yapılacaktır.

### 11.5 Yapay Zeka Destekli Kişiselleştirme
- AI tabanlı modüllerle, kullanıcılara kişiselleştirilmiş içerik/tavsiye, başarı tahmini ve zorluk seviyesi belirleme sunulacaktır.

### 11.6 Sertifika ve Katılım Belgesi Modülleri
- Tamamlanan kurslar veya başarılar için dijital sertifika ve katılım belgesi otomatik olarak üretilecektir.

### 11.7 Yönetici Paneli ve Gelişmiş Analitik
- Okul yöneticileri için detaylı performans, katılım, başarı, takip ve istatistik raporları sağlanacaktır.
- Veri görselleştirme, heatmap ve trend analizi ile eğitim verisi izlenebilecektir.

### 11.8 Uluslararasılaşma ve Lokalizasyon
- Çoklu dil ve kültürel uyum, uluslararası eğitim standartlarına uygunluk ve akreditasyon desteği sağlanacaktır.

### 11.9 Topluluk ve Ekosistem Yönetimi
- Mentor ve danışman ağı, topluluk katkı sistemi, moderasyon ve kullanıcı geri bildirim döngüsü oluşturulacaktır.

### 11.10 Gelişmiş Ticari Modüller
- Çeşitli ödeme sistemleri, pazaryeri altyapısı ve içerik üreticilerine gelir paylaşımı imkanı sunulacaktır.

### 11.11 Sürdürülebilirlik ve Sosyal Etki
- Sosyal sorumluluk projeleri, yıllık etki raporu ve çevre dostu altyapı hedefleri tanımlanacaktır.

### 11.12 Mobil ve Yeni Nesil Teknolojiler
- Native mobil uygulamalar, offline mod, push bildirimleri, AR/VR entegrasyonu ve chatbot desteği geliştirilecektir.

### 11.13 Kalite Güvence ve Sürekli İyileştirme
- Kullanıcı testleri, beta programları ve sürekli geliştirme döngüsü (Agile/Scrum) ile yazılım kalitesi sağlanacaktır.

---

## 12. Stratejik ve Yenilikçi Ek Başlıklar

### 12.1 Veri Güvenliği ve Dijital Etik
- Blockchain tabanlı veri doğrulama ve şeffaflık altyapısı.
- Gelişmiş veri şifreleme, sıfır bilgi protokolü ve kullanıcı veri sahipliği araçları.

### 12.2 Sürdürülebilir İş Modeli ve Çevresel Etki
- Sunucu altyapısında karbon ayak izini azaltıcı çözümler ve yeşil enerji kullanımı.
- Platformda “kağıtsız okul” ve dijital dönüşüm vizyonunun iletişimi.

### 12.3 Eğitimde Eşitlik ve Dahil Edicilik
- Dezavantajlı bölgeler, engelli bireyler ve göçmen çocuklar için ayrı modüller ve burs/sosyal sorumluluk programları.
- Eğitimde fırsat eşitliği için yerel STK’lar ve kamu işbirlikleri.

### 12.4 Uluslararası Akreditasyon ve Sertifikasyon
- Global geçerli sertifikalar, sınav merkezleriyle entegrasyon ve akreditasyon süreçleri.
- Uluslararası öğrenme standartlarına (OECD, UNESCO) uyum.

### 12.5 Yenilikçi Teknolojilerle Entegrasyon
- Dijital kimlik (e-ID), blockchain tabanlı başarı kaydı, NFT sertifikaları.
- IoT cihazlar ve sensörlerle STEM eğitiminde deneysel modüller.

### 12.6 Topluluk ve Ekosistem Genişletme
- Ulusal ve uluslararası hackathonlar, kodlama yarışmaları, eğitim inovasyon zirveleri.
- Platformun açık API ile startuplara ve 3. parti geliştiricilere açılması.

### 12.7 Kapsamlı Yol Haritası ve Yönetim Anlayışı
- 1 yıl, 3 yıl ve 5 yıl için detaylı ürün yol haritası.
- Yatırımcılar ve paydaşlar için şeffaf yönetim ve raporlama standartları.

### 12.8 Sürekli Ar-Ge ve İnovasyon Merkezi
- Akademik iş birlikleri, üniversite laboratuvarları ve Ar-Ge fonları ile inovasyon ekosistemi oluşturulması.

---

## 13. Satış Stratejisi

Okirem’in ticari başarıya ulaşması için planlanan satış stratejisi:

- **Hedef Müşteri Segmentleri:**  
  Okullar, eğitim kurumları, bireysel veliler/öğrenciler ve özel ders merkezleri. Özellikle yenilikçi eğitim yaklaşımlarına açık kurumlar ve dijital dönüşüm odaklı bölgeler önceliklendirilecek.

- **Gelir Modeli:**  
  - Freemium model: Temel modüller ücretsiz, ileri seviye ve premium içerikler ücretli.
  - Kurumsal lisanslama: Okullar ve eğitim kurumları için toplu lisans ve özel entegrasyon paketleri.
  - Bireysel abonelik: Öğrenci ve veliler için aylık/yıllık üyelik paketleri.
  - Sponsorluk ve reklam: Eğitim materyali üreticileri ve kurumlarla iş birlikleri.

- **Satış Kanalları:**  
  - Doğrudan satış: Eğitim kurumlarına ve okullara özel tanıtım ve satış görüşmeleri.
  - Dijital pazarlama: Sosyal medya, Google Ads, içerik pazarlaması ve SEO destekli web sitesi ile dijital müşteri kazanımı.
  - Platform içi tanıtım: Kullanıcıya yönelik kampanya, tavsiye ve ödül programları.

- **İş Ortaklıkları ve Network:**  
  Eğitim teknolojisi firmaları, yayınevleri ve öğretmen toplulukları ile iş birliği ağları kurulacak.

- **Pilot ve Referans Uygulamalar:**  
  İlk aşamada seçilen okullarda pilot uygulamalar ve başarı hikayeleri ile güven ve bilinirlik artırılacak.

- **Satış Sonrası Destek:**  
  Kurum ve bireysel müşterilere teknik destek, eğitim ve sürekli güncelleme hizmetleri sunulacak.

- **Büyüme ve Globalleşme:**  
  Türkiye’de başarı sağlandıktan sonra, benzer ihtiyaçlara sahip diğer ülkelerde lokalizasyon ve pazara giriş çalışmaları yürütülecek.
