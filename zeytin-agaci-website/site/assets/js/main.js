/* =========================================================
   ZEYTİN AĞACI — site logic
   - Menu data (edit prices/items here, no HTML editing needed)
   - Tab rendering
   - Header, mobile nav, reveal-on-scroll, gallery lightbox
   ========================================================= */

(function () {
  "use strict";

  var IMG = "assets/img/";

  /* -----------------------------------------------------------
     1) MENU DATA — tüm menüyü güncellemek için sadece burayı düzenleyin.
     price sayı olarak girilir (₺ otomatik eklenir).
  ----------------------------------------------------------- */
  var MENU = {
    kahveler: {
      label: "Kahveler",
      intro:
        "Taze kavrulmuş El Salvador çekirdeklerinden, günün her saatine uygun espresso bazlı kahveler.",
      featured: [
        {
          name: "Espresso",
          price: 140,
          desc: "Çikolata ve fındık notalarının öne çıktığı dengeli, yoğun espresso.",
          img: IMG + "espresso.webp",
        },
        {
          name: "Latte",
          price: 190,
          desc: "Espresso ve bol sütle hazırlanan yumuşak, dengeli lezzet.",
          img: IMG + "latte.webp",
        },
        {
          name: "Macchiato",
          price: 160,
          desc: "Taze espresso, hafif bir süt köpüğü dokunuşuyla.",
          img: IMG + "macchiato.webp",
        },
        {
          name: "Americano",
          price: 170,
          desc: "Espressonun sıcak suyla buluştuğu yalın, karakterli kahve.",
          img: IMG + "americano.webp",
        },
        {
          name: "Iced Latte",
          price: 210,
          desc: "Espresso, soğuk süt ve buzun ferahlatıcı uyumu.",
          img: IMG + "iced-latte.webp",
          tag: "Soğuk",
        },
      ],
      groups: [
        {
          title: "Espresso Bazlı Sıcak Kahveler",
          items: [
            { name: "Cortado", price: 170 },
            { name: "Flat White", price: 190 },
            { name: "Mocha", price: 210 },
            { name: "White Mocha", price: 210 },
            { name: "Caramel Latte", price: 210 },
            { name: "Strawberry Latte", price: 210 },
            { name: "Vanillia Latte", price: 210 },
            { name: "Hazelnut Latte", price: 210 },
            { name: "Lotus Latte", price: 210 },
            { name: "Cappuchino", price: 210 },
            { name: "Sütlü Coffolio", price: 215 },
          ],
        },
        {
          title: "Espresso Bazlı Soğuk Kahveler",
          note: "Ekstra kahve şurubu +10 ₺",
          items: [
            { name: "Iced Americano", price: 180 },
            { name: "Iced Latte", price: 230 },
            { name: "Iced White Mocha", price: 230 },
            { name: "Iced Mocha", price: 230 },
            { name: "Iced Caramel Latte", price: 230 },
            { name: "Iced Strawberry Latte", price: 230 },
            { name: "Iced Vanilla Latte", price: 230 },
            { name: "Iced Hazelnut Latte", price: 230 },
            { name: "Iced Lotus Latte", price: 230 },
            { name: "Iced Caramel Macchiato", price: 230 },
            { name: "Iced Coffolio", price: 230 },
            { name: "Iced Sütlü Coffolio", price: 250 },
            { name: "Affogato", price: 215 },
          ],
        },
      ],
    },

    serinlik: {
      label: "Serinlik",
      intro:
        "Meyveli sodalardan ev yapımı limonatalara, sıcak günler için ferahlatıcı seçenekler.",
      groups: [
        {
          title: "Serin Dokunuşlar",
          items: [
            { name: "Purple Sky", price: 250 },
            { name: "Freshzone", price: 250 },
            { name: "Afrodit", price: 250 },
            { name: "Limonata", price: 210 },
            { name: "Mangolu Limonata", price: 230 },
            { name: "Çilekli Limonata", price: 230 },
            { name: "Berry Hibiscus", price: 210 },
            { name: "Cool Lime", price: 210 },
            { name: "Churchill", price: 150 },
            {
              name: "Milkshake",
              price: 250,
              desc: "Çilek, çikolata, karamel, frambuaz, fındık, vanilya",
            },
          ],
        },
        {
          title: "Meşrubatlar",
          items: [
            { name: "Meyveli Soda", price: 75 },
            { name: "Maden Suyu", price: 60 },
            {
              name: "Cappy Meyve Suyu",
              price: 90,
              desc: "Karışık, portakal, vişne, kayısı, şeftali",
            },
            { name: "Coca Cola", price: 90 },
            { name: "Coca Cola Zero", price: 90 },
            { name: "Fanta", price: 90 },
            { name: "Sprite", price: 90 },
            {
              name: "Fuse Tea",
              price: 90,
              desc: "Limon, şeftali, mango, ananas, kavun, çilek, karpuz",
            },
            { name: "Su", price: 35 },
          ],
        },
      ],
    },

    sicak: {
      label: "Sıcak İçecekler",
      intro:
        "Geleneksel Türk kahvesinden bitki çaylarına, yavaşlamak için sıcacık bir mola.",
      groups: [
        {
          title: "Türk Kahvesi & Filtre",
          items: [
            { name: "Türk Kahvesi", price: 120 },
            { name: "Double Türk Kahvesi", price: 170 },
            { name: "Damla Sakızlı Türk Kahvesi", price: 170 },
            { name: "Dibek Kahvesi", price: 170 },
            { name: "Double Damla Sakızlı", price: 200 },
            { name: "Double Dibek Kahvesi", price: 200 },
            { name: "Filtre Kahve", price: 160 },
            { name: "Sütlü Filtre Kahve", price: 170 },
            { name: "V60", price: 220 },
          ],
        },
        {
          title: "Çaylar",
          items: [
            { name: "Çay", price: 50 },
            { name: "Fincan Çay", price: 65 },
            { name: "Kupa Çay", price: 75 },
            { name: "Termos Çay (Küçük)", price: 250 },
            { name: "Termos Çay (Büyük)", price: 450 },
            {
              name: "Bitki Çayları",
              price: 150,
              desc: "Kuşburnu, adaçayı, ıhlamur, papatya, nane limon",
            },
          ],
        },
        {
          title: "Diğer Sıcaklar",
          items: [
            { name: "Sıcak Çikolata", price: 200 },
            { name: "Sıcak Beyaz Çikolata", price: 200 },
            { name: "Salep", price: 200 },
          ],
        },
      ],
    },

    kahvalti: {
      label: "Kahvaltı",
      intro:
        "Sahanda yumurtadan serpme kahvaltıya, güne zeytin ağacının gölgesinde başlamak için.",
      featured: [
        {
          name: "Kahvaltı Tabağı",
          price: 450,
          desc: "Sahanda yumurta, peynir çeşitleri, zeytin, tereyağı, reçel, bal, çikolata kreması, kahvaltılık sos, mini salata, sucuk, ekmek, simit, 1 adet çay.",
        },
        {
          name: "Serpme Kahvaltı (2 Kişilik)",
          price: 1100,
          desc: "Sahanda yumurta, peynir tabağı, patates kızartması, 2 çeşit meze, közlenmiş biber (2 adet), patatesli sigara böreği (2 adet), hindi füme, kekikli zeytinyağı, zeytin, tereyağı, reçel, bal, çikolata kreması, kahvaltılık sos, fıstık ezmesi, mini salata, sucuk, ekmek, simit, 1 termos çay.",
        },
      ],
      groups: [
        {
          title: "Ekstralar",
          items: [
            { name: "Sahanda Yumurta", price: 145 },
            { name: "Sahanda Sucuklu Yumurta", price: 185 },
            { name: "Menemen", price: 225 },
            { name: "Kaşarlı Menemen", price: 245 },
            { name: "Sucuklu Menemen", price: 265 },
            { name: "Patates Kızartması", price: 155 },
            { name: "Patatesli Rulo Börek (4 adet)", price: 180 },
            {
              name: "Combo Tabağı",
              price: 450,
              desc: "Sosis, soğan halkası, nugget, rulo börek, patates kızartması",
            },
            {
              name: "Mini Salata",
              price: 100,
              desc: "Domates, salatalık, kıvırcık, biber, kekik, zeytinyağı",
            },
          ],
        },
        {
          title: "Tostlar",
          items: [
            { name: "Kaşarlı Tost", price: 180, desc: "Kaşar, cheddar" },
            {
              name: "Karışık Tost",
              price: 215,
              desc: "Kaşar, cheddar, sucuk",
            },
          ],
        },
        {
          title: "Bagel Sandviçler",
          items: [
            {
              name: "Üç Peynirli Sandviç",
              price: 190,
              desc: "Kaşar peyniri, cheddar, labne",
            },
            {
              name: "Hindi Füme Sandviç",
              price: 230,
              desc: "Hindi füme, domates, kaşar, cheddar, labne",
            },
            {
              name: "Guacamole Soslu Sandviç",
              price: 230,
              desc: "Avokado sos, domates, kaşar, cheddar",
            },
          ],
        },
      ],
    },

    tatlilar: {
      label: "Tatlılar",
      intro:
        "Atölyemizde günlük hazırlanan pastalar ve dondurmalar; brownie çeşitleri ve crumble, dondurma ile servis edilir.",
      featured: [
        {
          name: "Tiramisu Cheesecake",
          price: 345,
          img: IMG + "tiramisu-cheesecake.webp",
        },
        {
          name: "Limonlu Cheesecake",
          price: 310,
          img: IMG + "limonlu-cheesecake.webp",
        },
        {
          name: "Frambuazlı Cheesecake",
          price: 310,
          img: IMG + "frambuazli-cheesecake.webp",
        },
        {
          name: "Çikolata Rüyası",
          price: 320,
          img: IMG + "cikolata-ruyasi.webp",
        },
        {
          name: "Glutensiz Çikolata Cup",
          price: 280,
          desc: "Glutensiz",
          img: IMG + "glutensiz-cikolata-cup.webp",
          tag: "Glutensiz",
        },
        {
          name: "Çilekli Rulo Pasta",
          price: 275,
          img: IMG + "cilekli-rulo-pasta.webp",
        },
        {
          name: "Mono Latte",
          price: 245,
          img: IMG + "mono-latte.webp",
        },
        {
          name: "Orman Meyveli Crumble",
          price: 245,
          img: IMG + "orman-meyveli-crumble.webp",
        },
        {
          name: "Brownie",
          price: 290,
          desc: "Belçika çikolatalı cevizli / vişneli / beyaz çikolatalı",
          img: IMG + "brownie.webp",
        },
      ],
      groups: [
        {
          title: "Dondurmalar",
          items: [
            {
              name: "3 Top Dondurma",
              price: 150,
              desc: "Çikolata veya frambuaz sos ile servis edilir — çilekli, çikolatalı, vanilyalı, limonlu seçenekleriyle",
            },
          ],
        },
      ],
    },
  };

  var TAB_ORDER = ["kahveler", "serinlik", "sicak", "kahvalti", "tatlilar"];

  /* -----------------------------------------------------------
     2) RENDER MENU
  ----------------------------------------------------------- */
  function priceFmt(n) {
    return n.toLocaleString("tr-TR") + " ₺";
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderDishCard(item) {
    var card = el("article", "dish-card");
    if (item.img) {
      var media = el("div", "dish-card-media");
      if (item.tag) {
        var tag = el("span", "dish-tag", item.tag);
        card.appendChild(tag);
      }
      var img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.loading = "lazy";
      media.appendChild(img);
      card.appendChild(media);
    }
    var body = el("div", "dish-card-body");
    var top = el("div", "dish-card-top");
    top.appendChild(el("h4", null, item.name));
    top.appendChild(el("span", "price", priceFmt(item.price)));
    body.appendChild(top);
    if (item.desc) body.appendChild(el("p", null, item.desc));
    card.appendChild(body);
    return card;
  }

  function renderListRow(item) {
    var row = el("div", "list-row");
    var nameWrap = el("span", "name", item.name);
    if (item.desc) nameWrap.appendChild(el("span", "desc", item.desc));
    row.appendChild(nameWrap);
    row.appendChild(el("span", "leader"));
    row.appendChild(el("span", "price", priceFmt(item.price)));
    return row;
  }

  function renderPanel(key, data) {
    var panel = el("div", "menu-panel");
    panel.id = "panel-" + key;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-" + key);

    if (data.intro) panel.appendChild(el("p", "menu-panel-intro", data.intro));

    if (data.featured && data.featured.length) {
      var fg = el("div", "featured-grid reveal-stagger");
      data.featured.forEach(function (item) {
        fg.appendChild(renderDishCard(item));
      });
      panel.appendChild(fg);
    }

    if (data.groups && data.groups.length) {
      var lg = el("div", "list-groups");
      data.groups.forEach(function (group) {
        var g = el("div", "list-group");
        g.appendChild(el("h3", null, group.title));
        group.items.forEach(function (item) {
          g.appendChild(renderListRow(item));
        });
        if (group.note) g.appendChild(el("p", "group-note", group.note));
        lg.appendChild(g);
      });
      panel.appendChild(lg);
    }

    return panel;
  }

  function initMenu() {
    var tabsWrap = document.getElementById("menuTabs");
    var panelsWrap = document.getElementById("menuPanels");
    if (!tabsWrap || !panelsWrap) return;

    TAB_ORDER.forEach(function (key, i) {
      var data = MENU[key];

      var tab = el("button", "menu-tab" + (i === 0 ? " is-active" : ""), data.label);
      tab.type = "button";
      tab.id = "tab-" + key;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
      tab.setAttribute("aria-controls", "panel-" + key);
      tab.addEventListener("click", function () {
        switchTab(key);
      });
      tabsWrap.appendChild(tab);

      var panel = renderPanel(key, data);
      if (i === 0) panel.classList.add("is-active");
      panelsWrap.appendChild(panel);
    });

    observeReveals();
  }

  function switchTab(key) {
    var tabs = document.querySelectorAll(".menu-tab");
    var panels = document.querySelectorAll(".menu-panel");
    tabs.forEach(function (t) {
      var active = t.id === "tab-" + key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    panels.forEach(function (p) {
      p.classList.toggle("is-active", p.id === "panel-" + key);
    });
    observeReveals();
  }

  /* -----------------------------------------------------------
     3) HEADER / MOBILE NAV
  ----------------------------------------------------------- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });

      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          toggle.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      });
    }

    // active link highlight
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".main-nav a");
    if ("IntersectionObserver" in window && sections.length) {
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.getAttribute("id");
              navLinks.forEach(function (link) {
                link.classList.toggle(
                  "is-active",
                  link.getAttribute("href") === "#" + id
                );
              });
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach(function (s) {
        spy.observe(s);
      });
    }
  }

  /* -----------------------------------------------------------
     4) REVEAL ON SCROLL
  ----------------------------------------------------------- */
  var revealObserver;
  function observeReveals() {
    var targets = document.querySelectorAll(".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) {
        t.classList.add("is-visible");
      });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 }
      );
    }
    targets.forEach(function (t) {
      revealObserver.observe(t);
    });
  }

  /* -----------------------------------------------------------
     5) GALLERY LIGHTBOX
  ----------------------------------------------------------- */
  function initGallery() {
    var items = document.querySelectorAll(".gallery-item");
    var lightbox = document.getElementById("lightbox");
    if (!items.length || !lightbox) return;
    var lbImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox-close");

    function open(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        open(img.src, img.alt);
      });
    });
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* -----------------------------------------------------------
     6) MISC — year, smooth anchor offset already via CSS scroll-behavior
  ----------------------------------------------------------- */
  function initMisc() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    initHeader();
    initGallery();
    initMisc();
    observeReveals();
  });
})();
