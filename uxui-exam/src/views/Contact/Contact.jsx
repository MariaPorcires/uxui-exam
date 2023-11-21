import "./Contact.css";
import { useState } from "react";
import { useEffect } from "react";
//import { useBeforeUnload } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showWarningPhone, setShowWarningPhone] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.name === "phone") {
      if (e.target.value === "" || regex.test(e.target.value)) {
        setPhone(e.target.value);
        setShowWarningPhone(false);
      } else {
        setShowWarningPhone(true);
      }
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "e-mail") {
      setEmail(e.target.value);
    } else if (e.target.name === "subject") {
      setSubject(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      subject.trim() !== ""
    ) {
      console.log("Form submitted:", { name, phone, email, subject });
      setShowWarning(false);
    } else {
      setShowWarning(true);
      console.log("Please fill in all fields.");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = message;
      console.log(message);
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <main className="contact__main">
      HOME > Contact
      <p className="contact__text">Contact me for more information.</p>
      <form className="contact__inputs" onSubmit={handleSubmit}>
        {showWarning && (
          <p className="message-fill">
            Please fill in all fields before submitting the form.
          </p>
        )}

        <label htmlFor="name">Name</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="contact__input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
        />
        {showWarningPhone && (
          <p className="message-phone">
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
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="subject">Subject</label>
        <textarea
          className="contact__textarea"
          id="subject"
          name="subject"
          placeholder="Write something.."
          value={subject}
          onChange={handleChange}
        />

        <input className="contact__submit" type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default Contact;

//skicka vidare till thank you sida

//spara alla värden från input i state - för att ha kvar dem om man reloadar etc
