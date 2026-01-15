import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts, createContact, updateContact, deleteContact } from "./services/api";
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
  try {
    await createContact(contact);
    fetchContacts(); // refresh list
  } catch (error) {
    console.error("Error adding contact:", error.response?.data?.message || error.message);
    alert("Failed to add contact: " + (error.response?.data?.message || "Check console"));
  }
};


  const editContact = async (id, updatedContact) => {
  try {
    await updateContact(id, updatedContact);
    fetchContacts();
  } catch (error) {
    console.error("Error updating contact:", error.response?.data?.message || error.message);
    alert("Failed to update contact: " + (error.response?.data?.message || "Check console"));
  }
};


  const deleteContactHandler = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  const startEdit = (contact) => setContactToEdit(contact);
  const clearEdit = () => setContactToEdit(null);

  return (
    <div style={{ padding: "20px" }} className="container">
      <h1>Contacts Manager</h1>
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        contactToEdit={contactToEdit}
        clearEdit={clearEdit}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContactHandler}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
