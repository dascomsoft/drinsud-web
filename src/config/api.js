// Détection automatique de l'environnement
const getApiUrl = () => {
  // En production sur Vercel
  if (import.meta.env.PROD) {
    return '/api';
  }
  // En développement local
  return 'http://localhost:5000/api';
};

export const API_URL = getApiUrl();