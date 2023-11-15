import "./About.css";
import mary from "../../assets/mary.jpg";

function About() {
  return (
    <main className="about">
      <section className="about__container">
        <section className="about__imgcontainer">
          <video className="about__video" controls>
            <source src="src\assets\video.mp4" type="video/mp4" />
          </video>
        </section>
        <section className="about__text">
          <h1 className="about__title">Mary</h1>
          <h2>Hobbyphotographer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ex
            voluptatum repudiandae velit quae est incidunt eos dolore distinctio
            mollitia, nisi optio natus vel expedita ipsa quisquam ipsam
            reiciendis minus.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
