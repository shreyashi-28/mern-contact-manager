import React from "react";

const ContactList = ({ contacts, deleteContact, startEdit }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact._id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              <div className="action-buttons">
                <button className="edit" onClick={() => startEdit(contact)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => deleteContact(contact._id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
