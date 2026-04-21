// Visit.jsx — Reservation-ish form, hours, address. Red CTA panel variant.
const Visit = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="sl-visit">
      <div className="sl-visit__grid">
        <div className="sl-visit__info">
          <div className="sl-eyebrow">Visit</div>
          <h2 className="sl-display sl-visit__title">Come eat, câlisse.</h2>
          <div className="sl-visit__block">
            <div className="sl-visit__label">Address</div>
            <div className="sl-visit__val">501 Black Gold Dr<br/>Leduc, AB T9E 4Z6</div>
          </div>
          <div className="sl-visit__block">
            <div className="sl-visit__label">Hours</div>
            <div className="sl-visit__val">
              Tue–Thu · 11am – 9pm<br/>
              Fri–Sat · 11am – 11pm<br/>
              Sun · 11am – 8pm<br/>
              Lun · Fermé
            </div>
          </div>
          <div className="sl-visit__block">
            <div className="sl-visit__label">Phone</div>
            <div className="sl-visit__val">(780) 555-0189</div>
          </div>
        </div>

        <form
          className="sl-visit__form"
          onSubmit={e => { e.preventDefault(); setSent(true); }}
        >
          <div className="sl-eyebrow sl-visit__form-eye">Book a table</div>
          <div className="sl-visit__row">
            <label className="sl-field">
              <span>Name</span>
              <input defaultValue="Marc-André" />
            </label>
            <label className="sl-field">
              <span>Party</span>
              <select defaultValue="2">
                <option>1</option><option>2</option><option>3</option>
                <option>4</option><option>5</option><option>6+</option>
              </select>
            </label>
          </div>
          <div className="sl-visit__row">
            <label className="sl-field">
              <span>Date</span>
              <input type="date" defaultValue="2026-04-25" />
            </label>
            <label className="sl-field">
              <span>Time</span>
              <input type="time" defaultValue="19:30" />
            </label>
          </div>
          <label className="sl-field">
            <span>Notes (allergies, occasion, vibe)</span>
            <textarea rows="2" defaultValue="Extra pickle, s'il vous plaît." />
          </label>
          <button type="submit" className="sl-btn sl-btn--accent sl-btn--lg sl-visit__submit">
            {sent ? "On est là · merci ✦" : "Réserver →"}
          </button>
        </form>
      </div>
    </section>
  );
};

window.Visit = Visit;
