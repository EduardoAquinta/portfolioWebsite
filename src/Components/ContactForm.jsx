import React, { useState } from "react";

//herotofu weblink address for contact form
const FORM_ENDPOINT = "https://public.herotofu.com/v1/ff332da0-10e6-11ed-a9ac-1bde1534b8d2"; 


//hook for submitting the contact form
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


  //if submitted is true, display thank you
  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  //contact form creation
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