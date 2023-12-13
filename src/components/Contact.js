// src/components/Contact.js
import React, { useState } from "react";
import axios from "axios"; // You will need to install axios using the command npm install axios and import it into the Contact.js file

export default function Contact() {
  // You can use the useState hook to manage the state of the contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // You can use the handleSubmit function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior of the form
    setStatus("Sending..."); // Set the status to indicate the form is being sent
    // You can use axios to send a POST request to your backend server with the form data
    axios
      .post("/api/contact", { name, email, message })
      .then((response) => {
        // If the response is successful, clear the form fields and set the status to success
        setName("");
        setEmail("");
        setMessage("");
        setStatus("Success! Thank you for your message.");
      })
      .catch((error) => {
        // If the response is unsuccessful, set the status to error
        setStatus("Error! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-primary">Contact</h2>
      <p className="lead">
        If you want to get in touch with me, you can fill out the contact form below and I will get
        back to you as soon as possible. You can also find my email, phone, and social media links
        at the bottom of this page.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
        <p className="mt-3">{status}</p>
      </form>
    </section>
  );
}
