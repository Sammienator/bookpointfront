import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchBooks = () => API.get('/books');
export const fetchBook = (id) => API.get(`/books/${id}`);
export const createBook = (formData) =>
  API.post('/books', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const updateBook = (id, formData) =>
  API.put(`/books/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deleteBook = (id) => API.delete(`/books/${id}`);