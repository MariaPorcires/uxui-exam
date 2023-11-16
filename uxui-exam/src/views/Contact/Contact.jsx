import "./Contact.css";

function Contact() {
  return (
    <main className="contact__main">
      HOME > Contact
      <section className="contact__inputs">
        <p>
          contact me for more info and I will get back to you as soon as posible
        </p>
        <label htmlFor="name">Name</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
        />

        <label htmlFor="e-mail">E-mail</label>
        <input
          className="contact__input"
          type="text"
          id="e-mail"
          name="e-mail"
          placeholder="E-mail"
        />

        <label htmlFor="subject">Subject</label>
        <textarea
          className="contact__textarea"
          id="subject"
          name="subject"
          placeholder="Write something.."
        />

        <input className="contact__submit" type="submit" value="Submit" />
      </section>
    </main>
  );
}

export default Contact;

//skicka vidare till thank you sida
