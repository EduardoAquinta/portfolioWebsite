import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ff332da0-10e6-11ed-a9ac-1bde1534b8d2"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="contact-form"
      id="form"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button id="submit" type="submit"> Send </button>
      </div>
    </form>
  );
};

export default ContactForm;