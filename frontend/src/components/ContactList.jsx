import React from "react";

const ContactList = ({ contacts, deleteContact, startEdit }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>
        <div className="action-buttons">
            <button className="edit" onClick={() => editContact(contact._id)}>Edit</button>
            <button className="delete" onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
        </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
