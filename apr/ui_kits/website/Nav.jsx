// Nav.jsx — Sticky cream bar, logomark left, links + red CTA right
const Nav = ({ onSelect, current }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "story", label: "Story" },
    { id: "visit", label: "Visit" },
  ];
  return (
    <nav className="sl-nav">
      <a className="sl-nav__mark" onClick={() => onSelect("home")}>
        <img src="../../assets/logo-horizontal.svg" alt="Saint Laurent" />
      </a>
      <div className="sl-nav__links">
        {links.map(l => (
          <a key={l.id}
             className={"sl-nav__link " + (current === l.id ? "is-active" : "")}
             onClick={() => onSelect(l.id)}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="sl-nav__actions">
        <span className="sl-nav__hours">Open · 11am–9pm</span>
        <button className="sl-btn sl-btn--accent" onClick={() => onSelect("visit")}>
          Order <span className="sl-arrow">→</span>
        </button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
