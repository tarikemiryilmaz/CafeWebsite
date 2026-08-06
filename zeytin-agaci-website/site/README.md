# Zeytin Ağacı Cafe — Website

Bu klasör, tamamen statik (build gerektirmeyen) bir web sitesidir. Hiçbir
framework, npm paketi veya derleme adımı gerekmez — bu yüzden Vercel'e
saniyeler içinde yüklenir ve "bozulma" riski en düşük yapıdır.

## Vercel'e yükleme

**En kolay yol:**
1. Bu klasörün tamamını (README dahil) bir GitHub reposuna atın **veya**
2. [vercel.com/new](https://vercel.com/new) sayfasında "Deploy" derken bu
   klasörü doğrudan sürükleyip bırakın.
3. Framework olarak **"Other"** seçili kalsın, Build Command ve Output
   Directory alanlarını **boş bırakın**. Vercel `index.html`'i otomatik
   olarak kök dizinde bulup yayınlayacaktır.

Yerelde önizlemek isterseniz (opsiyonel), klasörün içinde bir terminal açıp:
```
python3 -m http.server 8000
```
çalıştırıp `http://localhost:8000` adresini açmanız yeterli.

## Klasör yapısı

```
index.html                → tüm sayfa içeriği (tek sayfa site)
assets/css/style.css      → tüm tasarım/stil
assets/js/main.js         → menü verisi + etkileşimler (sekmeler, mobil menü, galeri vb.)
assets/img/               → PDF menüden çıkarılan ürün fotoğrafları + logo
```

## Menüyü güncellemek (fiyat / ürün ekleme-çıkarma)

HTML'e dokunmanıza gerek yok. `assets/js/main.js` dosyasının en üstündeki
`MENU` nesnesini düzenlemeniz yeterli:

```js
{ name: "Cortado", price: 170 },
```

- Yeni bir ürün eklemek için ilgili kategorinin `items` listesine aynı
  formatta bir satır ekleyin.
- Fotoğraflı "öne çıkan" bir ürün eklemek isterseniz `featured` listesine
  `img: IMG + "dosya-adi.webp"` ekleyip görseli `assets/img/` klasörüne
  koymanız yeterli.
- Kategori sekmelerinin sırasını değiştirmek için dosyanın ortasındaki
  `TAB_ORDER` dizisini düzenleyin.

## ⚠️ Yayına almadan önce düzenlemeniz gerekenler

Elimde gerçek işletme bilgileriniz (adres, telefon, e-posta, sosyal medya
hesapları, çalışma saatleri) olmadığı için `index.html` içine **geçici /
örnek** değerler yerleştirdim. `Ziyaret Edin` bölümü ve footer'da şunları
gerçek bilgilerinizle değiştirin:

- Adres satırı (`(adresinizi buraya ekleyin)` yazan yer)
- Telefon numarası (`+90 555 555 55 55` geçen `tel:` bağlantıları)
- E-posta adresi (`merhaba@zeytinagacicafe.com`)
- Instagram / WhatsApp / Facebook bağlantıları (şu an `href="#"`)
- Google Haritalar gömülü haritası — şu an genel bir arama sonucunu
  gösteriyor; `index.html` içinde `map-frame` bölümündeki `iframe`
  `src` adresini, Google Haritalar'da işletmenizi bulup **Paylaş → Harita
  Yerleştir** ile aldığınız gerçek bağlantıyla değiştirin.
- Çalışma saatleri (şu an örnek saatler girilidir)

Bunların hepsi dosyalarda net bir şekilde bulunabilir durumdadır; arama
(Ctrl/Cmd+F) ile `555` veya `buraya ekleyin` yazarak hızlıca bulabilirsiniz.

## Uyumluluk

- Mobil, tablet ve masaüstünde test edilmiş responsive breakpoint'ler
  (480px / 760px / 900px / 1080px) içerir.
- `prefers-reduced-motion` desteklenir (animasyonları azaltan kullanıcılar
  için).
- Klavye ile gezinme ve görünür focus halkaları içerir.
