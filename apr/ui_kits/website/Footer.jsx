// Footer.jsx — Dark char footer with wordmark, columns, checker at top, credit line
const Footer = () => (
  <footer className="sl-footer">
    <div className="sl-checker sl-footer__check" />
    <div className="sl-footer__grid">
      <div className="sl-footer__mark">
        <img src="../../assets/logo-horizontal-inverse.svg" alt="Saint Laurent" />
        <p className="sl-footer__tag">Montreal soul, Alberta soil.</p>
      </div>
      <div className="sl-footer__col">
        <div className="sl-footer__h">Eat</div>
        <a>Menu</a><a>Daily specials</a><a>Catering</a><a>Takeout</a>
      </div>
      <div className="sl-footer__col">
        <div className="sl-footer__h">Visit</div>
        <a>Leduc · 501 Black Gold Dr</a><a>Hours</a><a>Reserve</a><a>Parking</a>
      </div>
      <div className="sl-footer__col">
        <div className="sl-footer__h">Follow</div>
        <a>Instagram</a><a>TikTok</a><a>Newsletter</a><a>Press</a>
      </div>
    </div>
    <div className="sl-footer__base">
      <span>© 2026 Saint Laurent Inc. · Leduc, AB</span>
      <span>18 février 2026 <span className="sl-dot sl-dot--light" /> MONTRÉAL <span className="sl-star">✦</span> LEDUC</span>
    </div>
  </footer>
);

window.Footer = Footer;
