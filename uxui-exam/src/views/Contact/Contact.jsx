import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showWarningPhone, setShowWarningPhone] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
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

  function backToHome() {
    navigate("/");
  }

  return (
    <main className="contact__main">
      <title>Contact</title>
      <section className="contact__breadcrumbs">
        <article className="contact__back" onClick={backToHome}>
          HOME{" "}
        </article>{" "}
        > Contact
      </section>
      {submitted && (
        <p className="message__submit">
          Tack för ditt meddedlande! Jag hör av mig så snart som möjligt!
        </p>
      )}
      {showWarning && (
        <p className="message__fill">Fyll i alla fält i formuläret!</p>
      )}
      <form className="contact__inputs" onSubmit={handleSubmit}>
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
          <p className="message-phone">Please enter only numbers</p>
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

//större inputs?
//design p meddelande
//göra färdigt alla länkar
//responsivitet
//portfoliosidan, text och alt + länkar
//ändra språk?
//ändra about me sidan, designen
//video
//contact me länk på about sidan(inte endast contact) samt annan färg
//spara alla värden från input i state - för att ha kvar dem om man reloadar etc
