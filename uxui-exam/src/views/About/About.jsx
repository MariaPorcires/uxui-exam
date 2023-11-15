import "./About.css";
import mary from "../../assets/mary.jpg";

function About() {
  return (
    <main>
      <h1>Mary</h1>
      <h2>Hobbyphotographer</h2>
      <img className="about__img" src={mary} />
    </main>
  );
}

export default About;
