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
          aria-label="images in portfolio"
        >
          <img
            src="src\assets\tunnel.jpg"
            alt="pojke som går i en mörk tunnel, ljuset från tunneln slut syns långt bort."
          />
          <img
            src="src\assets\bad.jpg"
            alt="liten pojke går på vägen i badbyxor och bär på en handduk"
          />
          <img
            src="src\assets\boys.jpg"
            alt="två pojkar står längst upp på en trappa och pratar"
          />
        </section>
        <section className="portfolio__images">
          <img
            src="src\assets\walk.jpg"
            alt="två små pojkar går tillsammans och håller varandra i handen, den ena pojken tittar bak"
          />
          <img
            src="src\assets\grey.jpg"
            alt="liten pojke sitter på en ramp, svartvit bild"
          />
          <img
            src="src\assets\whitetunnel.JPG"
            alt="liten pojke sparkar mot väggen i en lång vit tunnel"
          />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
