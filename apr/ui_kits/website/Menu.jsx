// Menu.jsx — Cream section, menu items with Bebas display names + blue prices, checker trim
const MENU = [
  {
    section: "From the Smoker",
    items: [
      { name: "The Saint", desc: "hand-cut rye, yellow mustard, double-smoked brisket", price: "19" },
      { name: "Smoked Meat sandwich", desc: "old fashioned, medium-fat, pickle on the side", price: "17" },
      { name: "Reuben", desc: "gruyere, kraut, russian, rye. juicy af.", price: "21" },
    ],
  },
  {
    section: "Casse-Croûte",
    items: [
      { name: "Poutine", desc: "it's poutsssinne, not POOteen, tabarnak.", price: "12" },
      { name: "Poutine Italienne", desc: "meat sauce, parmesan, pickled jalapeño", price: "15" },
      { name: "Steamé All Dressed", desc: "mustard, onion, cabbage — two per plate, always.", price: "9" },
    ],
  },
  {
    section: "Côtés & Extras",
    items: [
      { name: "Coleslaw libre", desc: "vinegar-forward, caraway, no mayo", price: "6" },
      { name: "Dill pickle", desc: "…et le pickle.", price: "3" },
    ],
  },
];

const MenuItem = ({ item }) => (
  <div className="sl-menu__item">
    <div className="sl-menu__name-wrap">
      <div className="sl-menu__name">{item.name}</div>
      <div className="sl-menu__desc">{item.desc}</div>
    </div>
    <div className="sl-menu__price">${item.price}</div>
  </div>
);

const MenuSection = ({ section }) => (
  <div className="sl-menu__section">
    <div className="sl-menu__section-head">
      <span className="sl-menu__section-title">{section.section}</span>
      <span className="sl-menu__section-rule" />
    </div>
    {section.items.map(it => <MenuItem key={it.name} item={it} />)}
  </div>
);

const Menu = () => (
  <section className="sl-menu">
    <div className="sl-section-head">
      <div className="sl-eyebrow sl-menu__eyebrow">Menu · Hiver 2026</div>
      <h2 className="sl-section-title sl-display">Mange çà.</h2>
      <p className="sl-section-lede">
        Short menu. Loud flavor. Hand-cut, double-smoked, served on wax paper. No bowls. No foam. No BS.
      </p>
    </div>

    <div className="sl-checker sl-menu__check" />

    <div className="sl-menu__grid">
      {MENU.map(s => <MenuSection key={s.section} section={s} />)}
    </div>

    <div className="sl-menu__foot">
      <span className="sl-menu__foot-label">All prices CAD. Tabarnak tax included? No.</span>
      <button className="sl-btn sl-btn--primary">Full menu PDF ↓</button>
    </div>
  </section>
);

window.Menu = Menu;
