import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  function contact() {
    navigate("/contact");
  }

  return (
    <main className="about" role="main">
      <title>Om mig</title>
      <section className="breadcrumbs">
        <article
          className="breadcrumbs__back"
          onClick={backToHome}
          role="button"
        >
          HEM{" "}
        </article>{" "}
        > Om mig
      </section>
      <article role="article" className="about__container">
        <h1 className="about__title">Maria</h1>
        <h2 className="about__undertitle">Hobbyfotograf</h2>
        <p className="about__paragraph">
          Mitt namn är Maria, jag är från Göteborg och kallar mig själv för
          hobbyfotograf. Jag har fotograferat hela mitt liv. Jag har en
          förkärlek till det analoga och mörkrumsarbete men har på senare tid
          försökt förhålla mig till den digitala världen. Jag fotograferar allt
          från porträtt, bröllop till natur, djur etc. Konstfoto ligger dock mig
          varmt om hjärtat.
        </p>
        <p className="about__paragraph">
          Är du intresserad av att göra ett projekt, samarbeta eller är du bara
          i behov av en fotograf så är du välkommen att kontakta mig.
        </p>
        <article
          role="article"
          className="contact__link"
          role="button"
          onClick={contact}
        >
          KONTAKT{" "}
        </article>{" "}
      </article>

      <section className="about__imgcontainer">
        <video className="about__video" controls width="700">
          <source src="src\assets\video.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="src/assets/captions.vtt"
            srcLang="sve"
            label="Swedish"
          />
          <p>
            Här är en <a href="src\assets\video.mp4">länk för att ladda ner</a>{" "}
            videon
          </p>
        </video>
      </section>
    </main>
  );
}

export default About;
