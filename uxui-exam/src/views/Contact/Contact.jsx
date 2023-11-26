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

  useEffect(() => {
    const storedName = localStorage.getItem("contact_name");
    const storedPhone = localStorage.getItem("contact_phone");
    const storedEmail = localStorage.getItem("contact_email");
    const storedSubject = localStorage.getItem("contact_subject");

    if (storedName) setName(storedName);
    if (storedPhone) setPhone(storedPhone);
    if (storedEmail) setEmail(storedEmail);
    if (storedSubject) setSubject(storedSubject);

    const handleBeforeUnload = (event) => {
      if (name || phone || email || subject) {
        const message =
          "Are you sure you want to leave? Your changes may not be saved.";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [name, phone, email, subject]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const regex = /^[0-9\b]+$/;

    if (name === "phone") {
      if (value === "" || regex.test(value)) {
        setPhone(value);
        setShowWarningPhone(false);
      } else {
        setShowWarningPhone(true);
      }
    } else if (name === "name") {
      setName(value);
    } else if (name === "e-mail") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    }

    localStorage.setItem(`contact_${name}`, value);
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

      localStorage.removeItem("contact_name");
      localStorage.removeItem("contact_phone");
      localStorage.removeItem("contact_email");
      localStorage.removeItem("contact_subject");
    } else {
      setShowWarning(true);
      console.log("Please fill in all fields.");
    }
  };

  function backToHome() {
    navigate("/");
  }

  return (
    <main className="contact__main">
      <title>Kontakt</title>
      <section className="breadcrumbs">
        <article className="breadcrumbs__back" onClick={backToHome}>
          HEM{" "}
        </article>{" "}
        > Kontakt
      </section>
      {submitted && (
        <p className="message__submit">
          Tack för ditt meddelande! Jag hör av mig så snart som möjligt!
        </p>
      )}
      {showWarning && (
        <p className="message__fill">Fyll i alla fält i formuläret!</p>
      )}
      <form className="contact__inputs" onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          placeholder="Ditt namn"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Telefon</label>
        <input
          className="contact__input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Telefon"
          value={phone}
          onChange={handleChange}
        />
        {showWarningPhone && (
          <p className="message-phone">Fyll i siffror i fältet</p>
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

        <label htmlFor="subject">Meddelande</label>
        <textarea
          className="contact__textarea"
          id="subject"
          name="subject"
          placeholder="Ditt meddelande"
          value={subject}
          onChange={handleChange}
        />

        <input className="contact__submit" type="submit" value="Skicka" />
      </form>
    </main>
  );
}

export default Contact;

//göra färdigt alla länkar
//responsivitet
//video
