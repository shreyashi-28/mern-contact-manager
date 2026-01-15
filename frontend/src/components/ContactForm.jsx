import React, { useState, useEffect } from "react";

const ContactForm = ({ addContact, editContact, contactToEdit, clearEdit }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  // Fill form when editing
  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!contact.name || !contact.email || !contact.phone) {
    alert("Please fill all fields!");
    return;
  }
  if (contact.phone.length < 10) {
    alert("Phone number must be at least 10 digits");
    return;
  }
  if (contactToEdit) {
    editContact(contact._id, contact);
    clearEdit();
  } else {
    addContact(contact);
  }
  setContact({ name: "", email: "", phone: "" });
};


  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
      />
      <button type="submit">{contactToEdit ? "Update" : "Add"}</button>
      {contactToEdit && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
