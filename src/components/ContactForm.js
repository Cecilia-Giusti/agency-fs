import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  // Hook use ref : il va récupéré les champs du formulaires sans mettre d'evenement dans les champs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_wj7y5xx",
        "template_ea9zzhq",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text); // Ok dans la console
          form.current.reset();
          formMessage.innerHTML = '<p className="success"> Message Envoyé </p>';

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            '<p className="error"> une erreur s est produite, veuillez réessayer </p>';
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>

      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
