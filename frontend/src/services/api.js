import axios from "axios";

const API_URL = "http://localhost:5000/api/contacts";

// Get all contacts
export const getContacts = () => axios.get(API_URL);

// Create a new contact
export const createContact = (data) => axios.post(API_URL, data);

// Update an existing contact
export const updateContact = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete a contact
export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
