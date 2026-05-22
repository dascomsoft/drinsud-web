import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.MODE === 'production'
    ? 'https://drinsud-api.onrender.com/api'
    : 'http://localhost:5000/api',
});

// Intercepteur pour gérer les erreurs 401 (token expiré)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;