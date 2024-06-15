// src/services/api.js
import axios from 'axios';

export const getPatient = (id) => axios.get(`/api/patient/${id}`);
export const getDoctors = () => axios.get('/api/doctors');
// Add more API functions as needed
