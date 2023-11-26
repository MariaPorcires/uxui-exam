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
    <main className="main">
      <title>Photography by Mary</title>
      <section className="main__background">
        <section className="main__section">
          <h1 className="main__title">Photography by Mary</h1>
        </section>
        <section className="flex">
          <section className="links">
            <button className="button" onClick={handleAboutMeClick}>
              OM MIG
            </button>
            <button className="button" onClick={handlePortfolioClick}>
              PORTFOLIO
            </button>
            <button className="button" onClick={handleContactClick}>
              KONTAKT
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
