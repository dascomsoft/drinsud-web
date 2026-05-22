const getApiUrl = () => {
  // Production sur Vercel → backend sur Render
  if (import.meta.env.PROD) {
    return 'https://drinsud-api.onrender.com/api';
  }
  // Développement local
  return 'http://localhost:5000/api';
};

export const API_URL = getApiUrl();
