import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleAboutMeClick() {
    navigate("/about");
  }

  function handlePortfolioClick() {
    navigate("/portfolio");
  }

  function handleContactClick() {
    navigate("/contact");
  }

  return (
    <main className="main" role="main">
      <title>Fotograf Maria</title>
      <section className="main__background">
        <section className="main__section">
          <h1 className="main__title">Fotograf Maria</h1>
        </section>
        <section className="flex">
          <section className="links" role="navigation">
            <button
              className="button"
              aria-label="om mig"
              onClick={handleAboutMeClick}
            >
              OM MIG
            </button>
            <button
              className="button"
              aria-label="portfolio"
              onClick={handlePortfolioClick}
            >
              PORTFOLIO
            </button>
            <button
              className="button"
              aria-label="kontakt"
              onClick={handleContactClick}
            >
              KONTAKT
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
