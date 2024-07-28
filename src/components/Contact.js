import React, { useState } from "react";
import { sendEmail } from "../utils/emailApi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("Form Data:", formData); // Debugging line

    try {
      await sendEmail(formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Contact Me
      </h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "semibold",
            marginBottom: "15px",
          }}
        >
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <label htmlFor="name" style={{ fontSize: "16px" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
          <label htmlFor="email" style={{ fontSize: "16px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
          <label htmlFor="message" style={{ fontSize: "16px" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
              height: "100px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Message
          </button>
        </form>
        {status && (
          <p style={{ marginTop: "15px", textAlign: "center" }}>{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
