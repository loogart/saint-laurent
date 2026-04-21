// Gallery.jsx — three full-bleed editorial shots with poster text over the center
const Gallery = () => (
  <section className="sl-gallery">
    <div className="sl-gallery__grid">
      <figure className="sl-gallery__shot">
        <img src="../../assets/photo-smoked-meat-poutine.png" alt="Smoked meat + poutine" />
        <figcaption>Le stack.</figcaption>
      </figure>

      <figure className="sl-gallery__shot sl-gallery__shot--poster">
        <img src="../../assets/photo-lifestyle-1.jpg" alt="Lifestyle" />
        <div className="sl-gallery__poster">
          <div className="sl-eyebrow">Saint Smoked Meat l'gros</div>
          <div className="sl-gallery__word sl-display">JUICY<br/>AF</div>
          <div className="sl-gallery__foot">…et le pickle.</div>
        </div>
      </figure>

      <figure className="sl-gallery__shot">
        <img src="../../assets/photo-lifestyle-2.jpg" alt="Street" />
        <figcaption>Vive le coleslaw libre.</figcaption>
      </figure>
    </div>
  </section>
);

window.Gallery = Gallery;
