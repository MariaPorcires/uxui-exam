import "./Portfolio.css";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <div className="portfolio">
      <title>Portfolio</title>
      <header className="breadcrumbs" role="heading" aria-level="1">
        <article className="breadcrumbs__back" onClick={backToHome}>
          HEM{" "}
        </article>{" "}
        > Portfolio
      </header>
      <main className="portfolio__main" role="main">
        <section
          className="portfolio__images"
          role="img"
          aria-label="foton i portfolio"
        >
          <img
            src="src\assets\tunnel.jpg"
            alt="ett barn går i en mörk tunnel, ljuset från tunnelns slut syns långt bort."
          />
          <img
            src="src\assets\bad.jpg"
            alt="litet barn går på vägen i badbyxor och bär på en handduk"
          />
          <img
            src="src\assets\boys.jpg"
            alt="två barn står längst upp på en trappa och pratar"
          />
        </section>
        <section className="portfolio__images">
          <img
            src="src\assets\walk.jpg"
            alt="två små barn går tillsammans och håller varandra i handen, den ena pojken tittar bak"
          />
          <img
            src="src\assets\grey.jpg"
            alt="ett barn sitter på en ramp, svartvit bild"
          />
          <img
            src="src\assets\whitetunnel.JPG"
            alt="ett barn sparkar mot väggen i en lång vit tunnel"
          />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
