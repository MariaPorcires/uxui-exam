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
    <main className="about">
      <title>About me</title>
      <section className="breadcrumbs">
        <article className="breadcrumbs__back" onClick={backToHome}>
          HEM{" "}
        </article>{" "}
        > Om mig
      </section>
      <section className="about__container">
        <h1 className="about__title">Mary</h1>
        <h2 className="about__undertitle">Hobbyfotograf</h2>
        <p className="about__paragraph">
          Mitt namn är Mary, jag är från Göteborg och kallar mig själv för
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
        <article className="contact__link" onClick={contact}>
          KONTAKT{" "}
        </article>{" "}
      </section>

      <section className="about__imgcontainer">
        <video className="about__video" controls>
          <source src="src\assets\video.mp4" type="video/mp4" />
        </video>
      </section>
    </main>
  );
}

export default About;

{
  /* <div>
<video controls width={700} height={400}>
  <source type='video/mp4' src='/videos/juicebar-video.mp4' />
  <track
    kind='captions'
    src='/videos/captions.vtt'
    srcLang='en'
    label='English'
  />
</video>
</div>
);
} */
}
