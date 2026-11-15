import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import contact from '../assets/images/contact.png'
import Modal from "../components/Modal";

const initialForm = {
  name: "",
  phoneNumber: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState({ open: false, status: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      setFormData(initialForm);
      setModal({ open: true, status: "success" });
    } catch (error) {
      console.error("There was an error sending the form:", error);
      setModal({ open: true, status: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <Modal
        open={modal.open}
        status={modal.status}
        title={modal.status === "success" ? "Message sent" : "Something went wrong"}
        message={
          modal.status === "success"
            ? "Thank you for reaching out. We'll get back to you shortly."
            : "We couldn't send your message. Please try again later."
        }
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
      <div className="section-one" style={{ backgroundImage: `url(${contact})` }}>
        <div className="section-center">
          <h2>contacts</h2>
          <div className="link">
            <Link to="/">home </Link>
            <p> {" > contacts"}</p>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="section-center">
          <div className="left">
            <h2>- contacts -</h2>
            <h1>Get in Touch</h1>
            <h3>We continuously seek to partner with competent practitioners</h3>
            <div className="items">
              <div className="item">
                <span>
                  <CiLocationOn />
                </span>
                <div className="text">
                  <h2>we are here</h2>
                  <p>
                    Plot 8A, Elsie Femi-Pearse, Off Adeola Odeku, Victoria Island
                  </p>
                </div>
              </div>
              <div className="item">
                <span>
                  <AiOutlinePhone />
                </span>
                <div className="text">
                  <h2>contacts</h2>
                  <p>
                    contact@kaxalafrica.com <br /> +2348078095798
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* FORM */}
          <div className="right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Phone Number*"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" disabled={submitting}>
                {submitting ? "SENDING..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.758664843128!2d3.4022878729333215!3d6.4300266338224015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52dc0328169%3A0x7885a1a33689a576!2sVictoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1688684258525!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
