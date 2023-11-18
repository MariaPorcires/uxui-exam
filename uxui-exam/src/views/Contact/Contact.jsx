import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [val, setVal] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <main className="contact__main">
      HOME > Contact
      <p className="contact__text">Contact me for more information.</p>
      <section className="contact__inputs">
        <label htmlFor="name">Name</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
        />

        <label htmlFor="number">Phone</label>
        <input
          className="contact__input"
          type="text"
          id="number"
          name="number"
          placeholder="Phone"
          value={val}
          onChange={handleChange}
        />
        {showWarning && (
          <p className="warning-message">
            Please enter only numbers in the Phone field.
          </p>
        )}

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

//spara alla värden från input i state - för att ha kvar dem om man reloadar etc
