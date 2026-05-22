// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Plus, Edit, Trash2, LogOut, Upload, X, Image as ImageIcon } from 'lucide-react';

// import { API_URL } from '../config/api';

// const AdminDashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const fileInputRef = useRef(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Investissement',
//     excerpt: '',
//     content: '',
//     imageUrl: '',
//     imagePublicId: '',
//   });
//   const navigate = useNavigate();

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     if (!token) {
//       navigate('/admin/login');
//       return;
//     }
//     fetchPosts();
//   }, [token]);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/posts`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Erreur:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
//     if (!allowedTypes.includes(file.type)) {
//       alert('Format non supporté. Utilisez JPG, PNG, GIF ou WEBP.');
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       alert('L\'image ne doit pas dépasser 5MB.');
//       return;
//     }

//     setUploadingImage(true);

//     const formDataImage = new FormData();
//     formDataImage.append('image', file);

//     try {
//       const response = await axios.post(`${API_URL}/upload`, formDataImage, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'x-auth-token': token
//         }
//       });
      
//       // Extraire le publicId de l'URL Cloudinary
//       const urlParts = response.data.imageUrl.split('/');
//       const publicIdWithExt = urlParts[urlParts.length - 1];
//       const publicId = publicIdWithExt.split('.')[0];
      
//       setFormData({ 
//         ...formData, 
//         imageUrl: response.data.imageUrl,
//         imagePublicId: publicId
//       });
      
//       alert('Image uploadée avec succès !');
      
//     } catch (error) {
//       console.error('Erreur upload:', error);
//       alert(error.response?.data?.message || 'Erreur lors de l\'upload');
//     } finally {
//       setUploadingImage(false);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingPost) {
//         await axios.put(`${API_URL}/posts/${editingPost._id}`, formData, {
//           headers: { 'x-auth-token': token }
//         });
//       } else {
//         await axios.post(`${API_URL}/posts`, formData, {
//           headers: { 'x-auth-token': token }
//         });
//       }
//       fetchPosts();
//       setShowModal(false);
//       resetForm();
//     } catch (error) {
//       console.error('Erreur sauvegarde:', error);
//       alert('Erreur lors de la sauvegarde');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) {
//       try {
//         await axios.delete(`${API_URL}/posts/${id}`, {
//           headers: { 'x-auth-token': token }
//         });
//         fetchPosts();
//       } catch (error) {
//         console.error('Erreur suppression:', error);
//         alert('Erreur lors de la suppression');
//       }
//     }
//   };

//   const handleEdit = (post) => {
//     setEditingPost(post);
//     setFormData({
//       title: post.title,
//       category: post.category,
//       excerpt: post.excerpt,
//       content: post.content,
//       imageUrl: post.imageUrl || '',
//       imagePublicId: post.imagePublicId || '',
//     });
//     setShowModal(true);
//   };

//   const resetForm = () => {
//     setEditingPost(null);
//     setFormData({
//       title: '',
//       category: 'Investissement',
//       excerpt: '',
//       content: '',
//       imageUrl: '',
//       imagePublicId: '',
//     });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminUser');
//     navigate('/admin/login');
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-16">
//       <div className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-orange-600">Dashboard Admin</h1>
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
//           >
//             <LogOut size={20} />
//             Déconnexion
//           </button>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Gestion des annonces</h2>
//           <button
//             onClick={() => {
//               resetForm();
//               setShowModal(true);
//             }}
//             className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition flex items-center gap-2"
//           >
//             <Plus size={20} />
//             Nouvelle annonce
//           </button>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b">
//               <tr>
//                 <th className="text-left py-3 px-4">Image</th>
//                 <th className="text-left py-3 px-4">Titre</th>
//                 <th className="text-left py-3 px-4">Catégorie</th>
//                 <th className="text-left py-3 px-4">Date</th>
//                 <th className="text-left py-3 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map(post => (
//                 <tr key={post._id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-4">
//                     {post.imageUrl && (
//                       <img 
//                         src={post.imageUrl} 
//                         alt={post.title}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                     )}
//                   </td>
//                   <td className="py-3 px-4 font-medium">{post.title}</td>
//                   <td className="py-3 px-4">
//                     <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
//                       {post.category}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 text-gray-600">
//                     {new Date(post.createdAt).toLocaleDateString('fr-FR')}
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleEdit(post)}
//                         className="text-blue-600 hover:text-blue-800"
//                       >
//                         <Edit size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(post._id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-xl font-bold">
//                 {editingPost ? 'Modifier l\'annonce' : 'Nouvelle annonce'}
//               </h3>
//               <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Titre</label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Catégorie</label>
//                 <select
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                 >
//                   <option value="Investissement">Investissement</option>
//                   <option value="Services">Services</option>
//                   <option value="Partenariat">Partenariat</option>
//                   <option value="Actualité">Actualité</option>
//                   <option value="Événement">Événement</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Résumé</label>
//                 <textarea
//                   value={formData.excerpt}
//                   onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//                   rows="2"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Contenu</label>
//                 <textarea
//                   value={formData.content}
//                   onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//                   rows="6"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Image</label>
//                 <div className="flex gap-2 items-start">
//                   <div className="flex-1">
//                     <input
//                       type="text"
//                       value={formData.imageUrl}
//                       onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//                       placeholder="URL de l'image (automatique après upload)"
//                       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
//                       readOnly
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       onChange={handleImageUpload}
//                       accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
//                       className="hidden"
//                       id="imageUpload"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => document.getElementById('imageUpload').click()}
//                       disabled={uploadingImage}
//                       className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition flex items-center gap-2 disabled:opacity-50"
//                     >
//                       <Upload size={20} />
//                       {uploadingImage ? 'Upload...' : 'Choisir'}
//                     </button>
//                   </div>
//                 </div>
                
//                 {formData.imageUrl && (
//                   <div className="mt-3">
//                     <p className="text-sm text-gray-600 mb-2">Aperçu :</p>
//                     <img 
//                       src={formData.imageUrl} 
//                       alt="Aperçu"
//                       className="w-32 h-32 object-cover rounded-lg border"
//                     />
//                   </div>
//                 )}
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//                 >
//                   {editingPost ? 'Mettre à jour' : 'Publier'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




































































































































































import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Plus, Edit, Trash2, LogOut, Upload, X, Image as ImageIcon } from 'lucide-react';

import { API_URL } from '../config/api';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Investissement',
    excerpt: '',
    content: '',
    imageUrl: '',
    imagePublicId: '',
  });
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  // Gestion des erreurs 401 (token expiré)
  const handleUnauthorized = (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      alert('Session expirée. Veuillez vous reconnecter.');
      navigate('/admin/login');
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchPosts();
  }, [token]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Erreur:', error);
      if (handleUnauthorized(error)) return;
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Format non supporté. Utilisez JPG, PNG, GIF ou WEBP.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('L\'image ne doit pas dépasser 5MB.');
      return;
    }

    setUploadingImage(true);

    const formDataImage = new FormData();
    formDataImage.append('image', file);

    try {
      const response = await axios.post(`${API_URL}/upload`, formDataImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token
        }
      });
      
      const urlParts = response.data.imageUrl.split('/');
      const publicIdWithExt = urlParts[urlParts.length - 1];
      const publicId = publicIdWithExt.split('.')[0];
      
      setFormData({ 
        ...formData, 
        imageUrl: response.data.imageUrl,
        imagePublicId: publicId
      });
      
      alert('Image uploadée avec succès !');
      
    } catch (error) {
      console.error('Erreur upload:', error);
      if (handleUnauthorized(error)) return;
      alert(error.response?.data?.message || 'Erreur lors de l\'upload');
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await axios.put(`${API_URL}/posts/${editingPost._id}`, formData, {
          headers: { 'x-auth-token': token }
        });
      } else {
        await axios.post(`${API_URL}/posts`, formData, {
          headers: { 'x-auth-token': token }
        });
      }
      fetchPosts();
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      if (handleUnauthorized(error)) return;
      alert('Erreur lors de la sauvegarde');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) {
      try {
        await axios.delete(`${API_URL}/posts/${id}`, {
          headers: { 'x-auth-token': token }
        });
        fetchPosts();
      } catch (error) {
        console.error('Erreur suppression:', error);
        if (handleUnauthorized(error)) return;
        alert('Erreur lors de la suppression');
      }
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      imageUrl: post.imageUrl || '',
      imagePublicId: post.imagePublicId || '',
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      category: 'Investissement',
      excerpt: '',
      content: '',
      imageUrl: '',
      imagePublicId: '',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Dashboard Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
          >
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Gestion des annonces</h2>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition flex items-center gap-2"
          >
            <Plus size={20} />
            Nouvelle annonce
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-4">Image</th>
                <th className="text-left py-3 px-4">Titre</th>
                <th className="text-left py-3 px-4">Catégorie</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="py-3 px-4 font-medium">{post.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold">
                {editingPost ? 'Modifier l\'annonce' : 'Nouvelle annonce'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Titre</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Catégorie</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                >
                  <option value="Investissement">Investissement</option>
                  <option value="Services">Services</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Actualité">Actualité</option>
                  <option value="Événement">Événement</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Résumé</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Contenu</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows="6"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Image</label>
                <div className="flex gap-2 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      placeholder="URL de l'image (automatique après upload)"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
                      className="hidden"
                      id="imageUpload"
                    />
                    <button
                      type="button"
                      onClick={() => document.getElementById('imageUpload').click()}
                      disabled={uploadingImage}
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition flex items-center gap-2 disabled:opacity-50"
                    >
                      <Upload size={20} />
                      {uploadingImage ? 'Upload...' : 'Choisir'}
                    </button>
                  </div>
                </div>
                
                {formData.imageUrl && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Aperçu :</p>
                    <img 
                      src={formData.imageUrl} 
                      alt="Aperçu"
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  {editingPost ? 'Mettre à jour' : 'Publier'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;