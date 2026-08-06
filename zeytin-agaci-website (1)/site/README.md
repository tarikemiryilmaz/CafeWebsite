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

## ⚠️ Yayına almadan önce kontrol edin

Adres, telefon (0538 975 58 82 / 0544 537 58 82), e-posta ve çalışma
saatleri (her gün 10:00 – 00:00) zaten gerçek bilgilerinizle girildi.
Hâlâ eksik olan tek şey sosyal medya bağlantıları:

- Instagram / WhatsApp / Facebook ikonları (`Ziyaret Edin` bölümünde)
  şu an `href="#"` olarak boş bırakıldı. `index.html` içinde
  `social-row` kısmını bulup gerçek hesap bağlantılarınızı ekleyin.

Harita, verdiğiniz adres üzerinden otomatik olarak gömüldü ve "Yol
Tarifi" butonu doğrudan sizin paylaştığınız Google Haritalar bağlantısına
gidiyor — bunları değiştirmenize gerek yok, ama haritanın doğru konumu
gösterdiğini yayına almadan önce bir kontrol etmenizi öneririz.

## Uyumluluk

- Mobil, tablet ve masaüstünde test edilmiş responsive breakpoint'ler
  (480px / 760px / 900px / 1080px) içerir.
- `prefers-reduced-motion` desteklenir (animasyonları azaltan kullanıcılar
  için).
- Klavye ile gezinme ve görünür focus halkaları içerir.
