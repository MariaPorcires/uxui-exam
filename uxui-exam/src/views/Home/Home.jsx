import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleAboutMeClick() {
    navigate("/about");
  }

  return (
    <main className="main">
      <section className="main__background">
        <section className="main__section">
          <h1 className="main__title">Photography by Mary</h1>
        </section>
        <section className="flex">
          <section className="links">
            <button className="button" onClick={handleAboutMeClick}>
              ABOUT ME
            </button>
            <button className="button">PORTFOLIO</button>
            <button className="button">CONTACT</button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;

//lägg till alt till varje bild
