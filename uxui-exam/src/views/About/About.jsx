import "./About.css";

function About() {
  return (
    <main className="about">
      <section className="about__container">
        <section className="about__text">
          <h1 className="about__title">Mary</h1>
          <h2 className="about__undertitle">Hobbyphotographer</h2>
          <p className="about__paragraph">
            I am Mary from Gothenburg, Sweden. I have always had a passion for
            photography, ever since I was a child.<br></br>I have no education
            in photography but have only had it as a hobby.<br></br>
            <br></br>
            If you want to know more about me and what I do, or if you need a
            photographer, feel free to contact me and we can arrange something.
          </p>
          Contact
        </section>

        <section className="about__imgcontainer">
          <p>HOME > About me</p>
          <video className="about__video" controls>
            <source src="src\assets\video.mp4" type="video/mp4" />
          </video>
        </section>
      </section>
    </main>
  );
}

export default About;
