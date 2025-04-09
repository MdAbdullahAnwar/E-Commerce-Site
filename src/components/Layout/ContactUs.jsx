import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  async function addContactUsHandler(contact) {
    const response = await fetch(
      "https://e-commerce-site-form-details-default-rtdb.firebaseio.com/contact-us.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Contact-Type": "contact-us/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setFormError("* Please fill in all details");
      return;
    }

    const contact = {
      Name: name,
      Email: email,
      PhoneNumber: phoneNumber,
    };

    addContactUsHandler(contact);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setFormError(""); 
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== ""
    );
  };

  return (
    <div>
        {/* Stylized Header */}
        <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">We'd love to hear from you!</p>
        </div>

        {/* Form Section */}
        <div className="contact-page">
            <form className="contact-form" onSubmit={submitHandler}>
                {formError && <p className="form-error">{formError}</p>}

                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                />

                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />

                <label htmlFor="phone">Phone Number:</label>
                <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;