// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Shield, Lock, User } from 'lucide-react';

// import { API_URL } from '../config/api';

// const AdminLogin = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${API_URL}/auth/login`, credentials);
//       localStorage.setItem('adminToken', response.data.token);
//       localStorage.setItem('adminUser', JSON.stringify(response.data.user));
//       navigate('/admin/dashboard');
//     } catch (error) {
//       setError(error.response?.data?.message || 'Erreur de connexion');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
//             <Shield size={40} className="text-primary" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800">Espace Admin</h2>
//           <p className="text-gray-600 mt-2">Connectez-vous pour gérer les annonces</p>
//         </div>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Nom d'utilisateur
//             </label>
//             <div className="relative">
//               <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 value={credentials.username}
//                 onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Mot de passe
//             </label>
//             <div className="relative">
//               <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="password"
//                 value={credentials.password}
//                 onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
//           >
//             {loading ? 'Connexion...' : 'Se connecter'}
//           </button>
//         </form>

//         <div className="mt-6 text-center text-sm text-gray-500">
//           <p>Contactez l'administrateur pour obtenir vos identifiants</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;












































































































































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Shield, Lock, User } from 'lucide-react';

import { API_URL } from '../config/api';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      
      // Stockage du token et des infos utilisateur
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminUser', JSON.stringify(response.data.user));
      
      // Redirection vers le dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      // Gestion des erreurs plus précise
      if (error.response) {
        // Le serveur a répondu avec un code d'erreur
        switch (error.response.status) {
          case 400:
            setError(error.response.data?.message || 'Identifiants invalides');
            break;
          case 401:
            setError('Nom d\'utilisateur ou mot de passe incorrect');
            break;
          case 404:
            setError('Service indisponible. Veuillez réessayer plus tard.');
            break;
          case 500:
            setError('Erreur serveur. Veuillez réessayer plus tard.');
            break;
          default:
            setError(error.response.data?.message || 'Erreur de connexion');
        }
      } else if (error.request) {
        // La requête a été faite mais pas de réponse
        setError('Impossible de contacter le serveur. Vérifiez votre connexion.');
      } else {
        // Autre erreur
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
      console.error('Erreur de connexion:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
            <Shield size={40} className="text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Espace Admin</h2>
          <p className="text-gray-600 mt-2">Connectez-vous pour gérer les annonces</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nom d'utilisateur
            </label>
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition disabled:opacity-50 font-semibold"
          >
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Contactez l'administrateur pour obtenir vos identifiants</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;