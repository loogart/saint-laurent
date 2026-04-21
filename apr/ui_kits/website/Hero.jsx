// Hero.jsx — Forest panel with grid, tilted logomark, giant Bebas headline, checker footer
const Hero = () => {
  return (
    <section className="sl-hero">
      <div className="sl-hero__grid" />
      <img className="sl-hero__mark" src="../../assets/logomark-inverse.svg" alt="" />

      <div className="sl-hero__body">
        <div className="sl-eyebrow sl-hero__eyebrow">
          18 février 2026 <span className="sl-dot" /> MONTRÉAL <span className="sl-star">✦</span> LEDUC
        </div>

        <h1 className="sl-hero__title sl-display">
          MONTREAL<br/>SOUL,<br/>
          <span className="sl-hero__accent">ALBERTA</span> SOIL.
        </h1>

        <p className="sl-hero__sub">
          Saint Laurent is a Montreal-style casse-croûte in the heart of Leduc, Alberta. Smoked meat stacked high, steamies snapped hot, poutine worth the drive. We saved a seat for you — minus the 4-hour flight.
        </p>

        <div className="sl-hero__cta">
          <button className="sl-btn sl-btn--accent sl-btn--lg">
            Order the Saint <span className="sl-arrow">→</span>
          </button>
          <button className="sl-btn sl-btn--ghost-light sl-btn--lg">
            See the menu
          </button>
        </div>

        <div className="sl-hero__tagrow">
          <span className="sl-hand">Heritedge osti.</span>
          <span className="sl-hero__meta">Best smoked meat in Alberta. Not a question. A statement.</span>
        </div>
      </div>

      <div className="sl-checker sl-hero__foot" />
    </section>
  );
};

window.Hero = Hero;
