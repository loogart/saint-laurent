// Story.jsx — Forest panel with interior photo, stacked copy, pull quote
const Story = () => (
  <section className="sl-story">
    <div className="sl-story__media">
      <img src="../../assets/photo-resto-interior.jpg" alt="Inside Saint Laurent" />
      <div className="sl-story__badge">
        <img src="../../assets/logomark-inverse.svg" alt="" />
      </div>
    </div>

    <div className="sl-story__body">
      <div className="sl-eyebrow sl-story__eyebrow">C'est quoi Saint Laurent?</div>
      <h2 className="sl-story__title sl-display">
        A Québec institution,<br/>reimagined for Alberta.
      </h2>
      <p className="sl-story__p">
        A heritage deli with modern discipline. A nostalgic brand without the nostalgia gimmicks. A place that feels like it's always existed.
      </p>
      <p className="sl-story__p">
        We saved a seat for you — on a wall in Alberta in the middle of the fucking winter.
      </p>

      <blockquote className="sl-story__quote">
        "This place has been here forever<br/>
        even if it opened yesterday."
      </blockquote>

      <div className="sl-story__rule" />

      <div className="sl-story__stats">
        <div><div className="sl-story__n">40 yrs</div><div className="sl-story__l">of tradition, distilled</div></div>
        <div><div className="sl-story__n">3</div><div className="sl-story__l">Montrealers in the kitchen</div></div>
        <div><div className="sl-story__n">1</div><div className="sl-story__l">best smoked meat in Alberta</div></div>
      </div>
    </div>
  </section>
);

window.Story = Story;
