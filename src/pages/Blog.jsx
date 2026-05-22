// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Calendar, ThumbsUp, Share2, MessageCircle, Eye } from 'lucide-react';
// import CommentSection from '../components/blog/CommentSection';

// import { API_URL } from '../config/api';

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

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

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-5">
//       <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Annonces</h1>
//           <p className="text-xl opacity-90">
//             Actualités et opportunités d'investissement pour la diaspora camerounaise
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
//           {posts.map((post) => (
//             <article key={post._id} className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
//               {post.imageUrl && (
//                 <div className="relative h-64 md:h-96 overflow-hidden">
//                   <img 
//                     src={post.imageUrl} 
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               <div className="p-6 md:p-8">
//                 <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={16} />
//                     <span>{new Date(post.createdAt).toLocaleDateString('fr-FR')}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Eye size={16} />
//                     <span>{post.views || 0} vues</span>
//                   </div>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                   {post.title}
//                 </h2>

//                 <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
//                   {post.content}
//                 </p>

//                 <CommentSection postId={post._id} />
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, ThumbsUp, Share2, MessageCircle, Eye } from 'lucide-react';
import CommentSection from '../components/blog/CommentSection';

import { API_URL } from '../config/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openComments, setOpenComments] = useState({}); // ← Ajout

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour toggler les commentaires ← Ajout
  const toggleComments = (postId) => {
    setOpenComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-5">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Annonces</h1>
          <p className="text-xl opacity-90">
            Actualités et opportunités d'investissement pour la diaspora camerounaise
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
              {post.imageUrl && (
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(post.createdAt).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{post.views || 0} vues</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                {/* Bouton Toggle Commentaires */}
                <button
                  onClick={() => toggleComments(post._id)}
                  className="flex items-center gap-2 font-extrabold text-green-800 hover:text-orange-600 transition-colors mb-4 "
                >
                  <MessageCircle size={20} />
                  <span>
                    {openComments[post._id] ? 'Masquer les commentaires' : 'Voir les commentaires'}
                  </span>
                </button>

                {/* CommentSection en mode toggle */}
                {openComments[post._id] && (
                  <CommentSection postId={post._id} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

















