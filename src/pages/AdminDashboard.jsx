



// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Plus, Edit, Trash2, LogOut, Upload, X, Image as ImageIcon, Key, Save } from 'lucide-react';

// import { API_URL } from '../config/api';

// const AdminDashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [passwordForm, setPasswordForm] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [passwordError, setPasswordError] = useState('');
//   const [passwordSuccess, setPasswordSuccess] = useState('');
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
//   const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

//   // Gestion des erreurs 401 (token expiré)
//   const handleUnauthorized = (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('adminToken');
//       localStorage.removeItem('adminUser');
//       alert('Session expirée. Veuillez vous reconnecter.');
//       navigate('/admin/login');
//       return true;
//     }
//     return false;
//   };

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
//       if (handleUnauthorized(error)) return;
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
//       if (handleUnauthorized(error)) return;
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
//       if (handleUnauthorized(error)) return;
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
//         if (handleUnauthorized(error)) return;
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

//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     setPasswordError('');
//     setPasswordSuccess('');

//     // Validation
//     if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//       setPasswordError('Les nouveaux mots de passe ne correspondent pas');
//       return;
//     }

//     if (passwordForm.newPassword.length < 6) {
//       setPasswordError('Le mot de passe doit contenir au moins 6 caractères');
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/auth/change-password`, {
//         currentPassword: passwordForm.currentPassword,
//         newPassword: passwordForm.newPassword
//       }, {
//         headers: { 'x-auth-token': token }
//       });

//       setPasswordSuccess('Mot de passe modifié avec succès !');
//       setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });

//       setTimeout(() => {
//         setShowPasswordModal(false);
//         setPasswordSuccess('');
//       }, 2000);

//     } catch (error) {
//       console.error('Erreur changement mot de passe:', error);
//       if (error.response?.status === 401) {
//         setPasswordError('Mot de passe actuel incorrect');
//       } else if (handleUnauthorized(error)) return;
//       else {
//         setPasswordError(error.response?.data?.message || 'Erreur lors du changement de mot de passe');
//       }
//     }
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
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600">
//               👤 {adminUser.username || 'Administrateur'}
//             </span>
//             <button
//               onClick={() => setShowPasswordModal(true)}
//               className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
//             >
//               <Key size={18} />
//               Changer mot de passe
//             </button>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
//             >
//               <LogOut size={20} />
//               Déconnexion
//             </button>
//           </div>
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

//       {/* Modal Changement de mot de passe */}
//       {showPasswordModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-xl font-bold flex items-center gap-2">
//                 <Key size={20} className="text-orange-600" />
//                 Changer le mot de passe
//               </h3>
//               <button onClick={() => {
//                 setShowPasswordModal(false);
//                 setPasswordError('');
//                 setPasswordSuccess('');
//                 setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
//               }} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleChangePassword} className="p-6 space-y-4">
//               {passwordError && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
//                   {passwordError}
//                 </div>
//               )}
//               {passwordSuccess && (
//                 <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm">
//                   {passwordSuccess}
//                 </div>
//               )}

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Mot de passe actuel
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.currentPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Nouveau mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.newPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//                 <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Confirmer le nouveau mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.confirmPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2"
//                 >
//                   <Save size={18} />
//                   Enregistrer
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowPasswordModal(false);
//                     setPasswordError('');
//                     setPasswordSuccess('');
//                     setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
//                   }}
//                   className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Modal Ajout/Édition (inchangé) */}
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






























































// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Plus, Edit, Trash2, LogOut, Upload, X, Key, Save, Menu } from 'lucide-react';

// import { API_URL } from '../config/api';

// const AdminDashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [passwordForm, setPasswordForm] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [passwordError, setPasswordError] = useState('');
//   const [passwordSuccess, setPasswordSuccess] = useState('');
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
//   const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

//   // Gestion des erreurs 401 (token expiré)
//   const handleUnauthorized = (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('adminToken');
//       localStorage.removeItem('adminUser');
//       alert('Session expirée. Veuillez vous reconnecter.');
//       navigate('/admin/login');
//       return true;
//     }
//     return false;
//   };

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
//       if (handleUnauthorized(error)) return;
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
//       if (handleUnauthorized(error)) return;
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
//       if (handleUnauthorized(error)) return;
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
//         if (handleUnauthorized(error)) return;
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

//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     setPasswordError('');
//     setPasswordSuccess('');

//     if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//       setPasswordError('Les nouveaux mots de passe ne correspondent pas');
//       return;
//     }

//     if (passwordForm.newPassword.length < 6) {
//       setPasswordError('Le mot de passe doit contenir au moins 6 caractères');
//       return;
//     }

//     try {
//       await axios.post(`${API_URL}/auth/change-password`, {
//         currentPassword: passwordForm.currentPassword,
//         newPassword: passwordForm.newPassword
//       }, {
//         headers: { 'x-auth-token': token }
//       });

//       setPasswordSuccess('Mot de passe modifié avec succès !');
//       setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });

//       setTimeout(() => {
//         setShowPasswordModal(false);
//         setPasswordSuccess('');
//       }, 2000);

//     } catch (error) {
//       console.error('Erreur changement mot de passe:', error);
//       if (error.response?.status === 401) {
//         setPasswordError('Mot de passe actuel incorrect');
//       } else if (handleUnauthorized(error)) return;
//       else {
//         setPasswordError(error.response?.data?.message || 'Erreur lors du changement de mot de passe');
//       }
//     }
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
//       {/* Header Responsive */}
//      {/* Header Responsive - Version corrigée */}
// <div className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
//   <div className="container mx-auto px-4 py-3">
//     <div className="flex justify-between items-center">
//       <h1 className="text-xl md:text-2xl font-bold text-orange-600">Dashboard Admin</h1>

//       <div className="flex items-center gap-4">
//         <span className="text-sm text-gray-600 hidden md:inline">
//           👤 {adminUser.username || 'Administrateur'}
//         </span>
//         <button
//           onClick={() => setShowPasswordModal(true)}
//           className="hidden md:flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
//         >
//           <Key size={18} />
//           <span className="hidden sm:inline">Changer mot de passe</span>
//         </button>
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
//         >
//           <LogOut size={20} />
//           <span className="hidden sm:inline">Déconnexion</span>
//         </button>

//         {/* Menu mobile button */}
//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden p-2 rounded-lg hover:bg-gray-100"
//         >
//           <Menu size={24} />
//         </button>
//       </div>
//     </div>

//     {/* Menu mobile dropdown */}
//     {mobileMenuOpen && (
//       <div className="md:hidden mt-3 pt-3 border-t flex flex-col gap-3">
//         <div className="text-sm text-gray-600 px-2 py-1 bg-gray-50 rounded-lg">
//           👤 {adminUser.username || 'Administrateur'}
//         </div>
//         <button
//           onClick={() => {
//             setShowPasswordModal(true);
//             setMobileMenuOpen(false);
//           }}
//           className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition px-2 py-2 hover:bg-gray-50 rounded-lg"
//         >
//           <Key size={18} />
//           Changer mot de passe
//         </button>
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition px-2 py-2 hover:bg-gray-50 rounded-lg"
//         >
//           <LogOut size={20} />
//           Déconnexion
//         </button>
//       </div>
//     )}
//   </div>
// </div>

//       <div className="container mx-auto px-4 py-6 md:py-8">
//         {/* En-tête avec bouton nouvelle annonce responsive */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//           <h2 className="text-xl md:text-2xl font-bold text-gray-800">Gestion des annonces</h2>
//           <button
//             onClick={() => {
//               resetForm();
//               setShowModal(true);
//             }}
//             className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 w-full sm:w-auto"
//           >
//             <Plus size={20} />
//             Nouvelle annonce
//           </button>
//         </div>

//         {/* Version mobile : Cartes */}
//         <div className="block md:hidden space-y-4">
//           {posts.map(post => (
//             <div key={post._id} className="bg-white rounded-xl shadow-sm p-4">
//               <div className="flex items-start gap-3">
//                 {post.imageUrl && (
//                   <img 
//                     src={post.imageUrl} 
//                     alt={post.title}
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                 )}
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-800">{post.title}</h3>
//                   <span className="inline-block mt-1 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-xs">
//                     {post.category}
//                   </span>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {new Date(post.createdAt).toLocaleDateString('fr-FR')}
//                   </p>
//                   <div className="flex gap-3 mt-3">
//                     <button
//                       onClick={() => handleEdit(post)}
//                       className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
//                     >
//                       <Edit size={16} /> Modifier
//                     </button>
//                     <button
//                       onClick={() => handleDelete(post._id)}
//                       className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
//                     >
//                       <Trash2 size={16} /> Supprimer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Version desktop : Tableau */}
//         <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
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

//       {/* Modal Changement de mot de passe */}
//       {showPasswordModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full mx-4">
//             <div className="flex justify-between items-center p-4 md:p-6 border-b">
//               <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
//                 <Key size={20} className="text-orange-600" />
//                 Changer le mot de passe
//               </h3>
//               <button onClick={() => {
//                 setShowPasswordModal(false);
//                 setPasswordError('');
//                 setPasswordSuccess('');
//                 setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
//               }} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleChangePassword} className="p-4 md:p-6 space-y-4">
//               {passwordError && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
//                   {passwordError}
//                 </div>
//               )}
//               {passwordSuccess && (
//                 <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm">
//                   {passwordSuccess}
//                 </div>
//               )}

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
//                   Mot de passe actuel
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.currentPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
//                   Nouveau mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.newPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//                 <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
//                   Confirmer le nouveau mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   value={passwordForm.confirmPassword}
//                   onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2"
//                 >
//                   <Save size={18} />
//                   Enregistrer
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowPasswordModal(false);
//                     setPasswordError('');
//                     setPasswordSuccess('');
//                     setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
//                   }}
//                   className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Modal Ajout/Édition */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-4 md:p-6 border-b">
//               <h3 className="text-lg md:text-xl font-bold">
//                 {editingPost ? 'Modifier l\'annonce' : 'Nouvelle annonce'}
//               </h3>
//               <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Titre</label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Catégorie</label>
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
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Résumé</label>
//                 <textarea
//                   value={formData.excerpt}
//                   onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//                   rows="2"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Contenu</label>
//                 <textarea
//                   value={formData.content}
//                   onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//                   rows="6"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Image</label>
//                 <div className="flex flex-col sm:flex-row gap-2 items-start">
//                   <div className="flex-1 w-full">
//                     <input
//                       type="text"
//                       value={formData.imageUrl}
//                       onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//                       placeholder="URL de l'image (automatique après upload)"
//                       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 text-sm"
//                       readOnly
//                     />
//                   </div>
//                   <div className="w-full sm:w-auto">
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
//                       className="w-full sm:w-auto px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
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
//                       className="w-24 h-24 object-cover rounded-lg border"
//                     />
//                   </div>
//                 )}
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
import { Plus, Edit, Trash2, LogOut, Upload, X, Key, Save, Menu } from 'lucide-react';

import { API_URL } from '../config/api';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
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
  const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

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

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('Les nouveaux mots de passe ne correspondent pas');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    try {
      await axios.post(`${API_URL}/auth/change-password`, {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      }, {
        headers: { 'x-auth-token': token }
      });

      setPasswordSuccess('Mot de passe modifié avec succès !');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });

      setTimeout(() => {
        setShowPasswordModal(false);
        setPasswordSuccess('');
      }, 2000);

    } catch (error) {
      console.error('Erreur changement mot de passe:', error);
      if (error.response?.status === 401) {
        setPasswordError('Mot de passe actuel incorrect');
      } else if (handleUnauthorized(error)) return;
      else {
        setPasswordError(error.response?.data?.message || 'Erreur lors du changement de mot de passe');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-6 md:py-8">

        {/* ===== HEADER positionné juste au-dessus du bouton ===== */}
        <div className="bg-white shadow-sm border rounded-xl mb-4">
          <div className="px-4 h-16 flex items-center">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-xl md:text-2xl font-bold text-orange-600">
                Dashboard Admin
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 hidden md:inline">
                  👤 {adminUser.username || 'Administrateur'}
                </span>

                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="hidden md:flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
                >
                  <Key size={18} />
                  <span className="hidden sm:inline">Changer mot de passe</span>
                </button>

                {/* <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
                >
                  <LogOut size={20} />
                  <span className="hidden sm:inline">Déconnexion</span>
                </button> */}

                {/* Menu mobile button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Menu mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3 rounded-b-xl">
              <div className="text-sm text-gray-600 px-2 py-1 bg-gray-50 rounded-lg">
                👤 {adminUser.username || 'Administrateur'}
              </div>

              <button
                onClick={() => {
                  setShowPasswordModal(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                <Key size={18} />
                Changer mot de passe
              </button>

              {/* <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                <LogOut size={20} />
                Déconnexion
              </button> */}
            </div>
          )}
        </div>
        {/* ===== FIN HEADER ===== */}

        {/* Bouton nouvelle annonce */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Gestion des annonces</h2>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Plus size={20} />
            Nouvelle annonce
          </button>
        </div>

        {/* Version mobile : Cartes */}
        <div className="block md:hidden space-y-4">
          {posts.map(post => (
            <div key={post._id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-start gap-3">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{post.title}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-xs">
                    {post.category}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                  </p>
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <Edit size={16} /> Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Version desktop : Tableau */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
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

        {/* Modal Changement de mot de passe */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full mx-4">
              <div className="flex justify-between items-center p-4 md:p-6 border-b">
                <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                  <Key size={20} className="text-orange-600" />
                  Changer le mot de passe
                </h3>
                <button onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordError('');
                  setPasswordSuccess('');
                  setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
                }} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleChangePassword} className="p-4 md:p-6 space-y-4">
                {passwordError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
                    {passwordError}
                  </div>
                )}
                {passwordSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm">
                    {passwordSuccess}
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Mot de passe actuel
                  </label>
                  <input
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                    Confirmer le nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordModal(false);
                      setPasswordError('');
                      setPasswordSuccess('');
                      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Ajout/Édition */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 md:p-6 border-b">
                <h3 className="text-lg md:text-xl font-bold">
                  {editingPost ? 'Modifier l\'annonce' : 'Nouvelle annonce'}
                </h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Titre</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Catégorie</label>
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
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Résumé</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows="2"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Contenu</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows="6"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Image</label>
                  <div className="flex flex-col sm:flex-row gap-2 items-start">
                    <div className="flex-1 w-full">
                      <input
                        type="text"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        placeholder="URL de l'image (automatique après upload)"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 text-sm"
                        readOnly
                      />
                    </div>
                    <div className="w-full sm:w-auto">
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
                        className="w-full sm:w-auto px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
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
                        className="w-24 h-24 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
    </div>
  );
};

export default AdminDashboard;