import axios from 'axios';

axios.defaults.baseURL = `https://652e68780b8d8ddac0b15439.mockapi.io/contacts/`;

export const allContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async contactData => {
  const response = await axios.post('/contacts', contactData);
  return response.data;
};

export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
