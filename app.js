// app.js
const I18N = {
  ar: {
    brand: "Montage Hub",
    heroTitle: "دليل مواقع المونتاج",
    heroSub: "جميع مواقع المؤثرات، ساوند افكت، الصور، الفيديوهات، الموشن جرافيك، الأيقونات المتحركة، والأشكال 2D/3D — مجاني ومدفوع — في مكان واحد.",
    searchPlaceholder: "ابحث بعمق: اسم الموقع، الوصف، الوسوم، الفئة...",
    resultsLabel: "نتيجة",
    noResults: "لا توجد نتائج. جرب بحثاً آخر أو غيّر الفلاتر.",
    footer: "Montage Hub — دليل مواقع المونتاج. جميع الروابط تؤدي إلى مواقع خارجية.",
    all: "الكل",
    free: "مجاني",
    paid: "مدفوع",
    categories: {
      plugins: "ملحقات/إضافات",
      effects: "مؤثرات/VFX",
      sfx: "ساوند افكت",
      images: "صور",
      videos: "فيديوهات",
      motion: "موشن جرافيك",
      icons: "أيقونات متحركة",
      shapes: "أشكال 2D/3D",
    },
    visit: "زيارة",
    freeBadge: "مجاني",
    paidBadge: "مدفوع",
    freemiumBadge: "مجاني/مدفوع",
  },
  en: {
    brand: "Montage Hub",
    heroTitle: "Montage Sites Directory",
    heroSub: "All sites for effects, sound effects, images, videos, motion graphics, animated icons, and 2D/3D shapes — free & paid — in one place.",
    searchPlaceholder: "Deep search: site name, description, tags, category...",
    resultsLabel: "results",
    noResults: "No results. Try another search or change filters.",
    footer: "Montage Hub — Montage sites directory. All links lead to external sites.",
    all: "All",
    free: "Free",
    paid: "Paid",
    categories: {
      plugins: "Plugins/Add-ons",
      effects: "Effects/VFX",
      sfx: "Sound Effects",
      images: "Images",
      videos: "Videos",
      motion: "Motion Graphics",
      icons: "Animated Icons",
      shapes: "2D/3D Shapes",
    },
    visit: "Visit",
    freeBadge: "Free",
    paidBadge: "Paid",
    freemiumBadge: "Freemium",
  },
};

let lang = localStorage.getItem("mh_lang") || "ar";
let theme = localStorage.getItem("mh_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let activeCat = "all";
let activePrice = "all";
let query = "";

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function applyTheme() {
  document.documentElement.classList.toggle("dark", theme === "dark");
  $("#sunIcon").classList.toggle("hidden", theme !== "dark");
  $("#moonIcon").classList.toggle("hidden", theme === "dark");
  localStorage.setItem("mh_theme", theme);
}
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langToggle").textContent = lang === "ar" ? "EN" : "AR";
  // translate static
  $$("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (I18N[lang][k]) el.textContent = I18N[lang][k];
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    const k = el.getAttribute("data-i18n-placeholder");
    if (I18N[lang][k]) el.placeholder = I18N[lang][k];
  });
  localStorage.setItem("mh_lang", lang);
  renderFilters();
  render();
}

function priceLabel(p) {
  if (p === "free") return I18N[lang].freeBadge;
  if (p === "paid") return I18N[lang].paidBadge;
  return I18N[lang].freemiumBadge;
}
function priceClass(p) {
  if (p === "free") return "badge-free";
  if (p === "paid") return "badge-paid";
  return "badge-paid";
}

function renderFilters() {
  const cats = ["all", ...Object.keys(I18N[lang].categories)];
  $("#categoryFilters").innerHTML = cats.map((c) => {
    const label = c === "all" ? I18N[lang].all : I18N[lang].categories[c];
    return `<button class="filter-btn ${activeCat===c?"active":""}" data-cat="${c}">${label}</button>`;
  }).join("");
  const prices = ["all", "free", "paid"];
  $("#priceFilters").innerHTML = prices.map((p) => {
    const label = p === "all" ? I18N[lang].all : (p === "free" ? I18N[lang].free : I18N[lang].paid);
    return `<button class="filter-btn price-btn ${activePrice===p?"active":""}" data-price="${p}">${label}</button>`;
  }).join("");
  $("#categoryFilters").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { activeCat = b.dataset.cat; renderFilters(); render(); }));
  $("#priceFilters").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { activePrice = b.dataset.price; renderFilters(); render(); }));
}

function matchesPrice(item) {
  if (activePrice === "all") return true;
  if (activePrice === "free") return item.price === "free" || item.price === "freemium";
  if (activePrice === "paid") return item.price === "paid" || item.price === "freemium";
  return true;
}

function render() {
  const q = query.trim().toLowerCase();
  const filtered = SITES.filter((s) => {
    if (activeCat !== "all" && s.cat !== activeCat) return false;
    if (!matchesPrice(s)) return false;
    if (q) {
      const hay = [s.name, s.url, s.desc_en, s.desc_ar, (s.tags||""), s.cat, I18N[lang].categories[s.cat]||""].join(" ").toLowerCase();
      // deep search: split query into tokens, all must match
      const tokens = q.split(/\s+/).filter(Boolean);
      if (!tokens.every((t) => hay.includes(t))) return false;
    }
    return true;
  });

  $("#resultCount").textContent = filtered.length;
  const grid = $("#grid");
  if (filtered.length === 0) {
    grid.innerHTML = "";
    $("#emptyState").classList.remove("hidden");
    return;
  }
  $("#emptyState").classList.add("hidden");
  grid.innerHTML = filtered.map((s) => {
    const desc = lang === "ar" ? s.desc_ar : s.desc_en;
    const catLabel = I18N[lang].categories[s.cat] || s.cat;
    return `
      <article class="card">
        <div class="card-meta">
          <span class="badge badge-cat">${catLabel}</span>
          <span class="badge ${priceClass(s.price)}">${priceLabel(s.price)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(s.name)}</h3>
        <p class="card-desc">${escapeHtml(desc)}</p>
        <div class="card-meta">
          <span class="tag">${escapeHtml(s.tags || "")}</span>
          <a class="card-link" href="${encodeURI(s.url)}" target="_blank" rel="noopener noreferrer">${I18N[lang].visit} ↗</a>
        </div>
      </article>`;
  }).join("");
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// init
applyTheme();
applyLang();

$("#themeToggle").addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; applyTheme(); });
$("#langToggle").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); });
$("#searchInput").addEventListener("input", (e) => { query = e.target.value; render(); });
// keyboard shortcut: focus search with /
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== $("#searchInput")) {
    e.preventDefault();
    $("#searchInput").focus();
  }
});
