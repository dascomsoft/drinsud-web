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












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Calendar, ThumbsUp, Share2, MessageCircle, Eye } from 'lucide-react';
// import CommentSection from '../components/blog/CommentSection';

// import { API_URL } from '../config/api';

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openComments, setOpenComments] = useState({}); // ← Ajout

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

//   // Fonction pour toggler les commentaires ← Ajout
//   const toggleComments = (postId) => {
//     setOpenComments(prev => ({
//       ...prev,
//       [postId]: !prev[postId]
//     }));
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

//                 {/* Bouton Toggle Commentaires */}
//                 <button
//                   onClick={() => toggleComments(post._id)}
//                   className="flex items-center gap-2 font-extrabold text-green-800 hover:text-orange-600 transition-colors mb-4 "
//                 >
//                   <MessageCircle size={20} />
//                   <span>
//                     {openComments[post._id] ? 'Masquer les commentaires' : 'Voir les commentaires'}
//                   </span>
//                 </button>

//                 {/* CommentSection en mode toggle */}
//                 {openComments[post._id] && (
//                   <CommentSection postId={post._id} />
//                 )}
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
import {
  Calendar,
  MessageCircle,
  Eye
} from 'lucide-react';

import CommentSection from '../components/blog/CommentSection';
import { API_URL } from '../config/api';

const Blog = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openComments, setOpenComments] = useState({});

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

  const toggleComments = (postId) => {
    setOpenComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 md:py-24">

        <div className="container mx-auto px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Blog & Annonces
          </h1>

          <p className="text-sm md:text-xl opacity-90 leading-relaxed">
            Actualités et opportunités d'investissement
            pour la diaspora camerounaise
          </p>

        </div>
      </div>

      {/* POSTS */}
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-12">

        <div className="max-w-4xl mx-auto">

          {posts.map((post) => (

            <article
              key={post._id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                mb-8
                overflow-hidden
              "
            >

              {/* IMAGE */}
              {post.imageUrl && (

                <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">

                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-3 left-3">
                    <span className="
                      bg-orange-600
                      text-white
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      md:text-sm
                    ">
                      {post.category}
                    </span>
                  </div>

                </div>
              )}

              {/* CONTENT */}
              <div className="p-4 md:p-8">

                {/* META */}
                <div className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  text-gray-500
                  text-xs
                  md:text-sm
                  mb-4
                ">

                  <div className="flex items-center gap-1">
                    <Calendar size={14} />

                    <span>
                      {new Date(post.createdAt)
                        .toLocaleDateString('fr-FR')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Eye size={14} />

                    <span>
                      {post.views || 0} vues
                    </span>
                  </div>

                </div>

                {/* TITLE */}
                <h2 className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  text-gray-800
                  mb-4
                  leading-tight
                ">
                  {post.title}
                </h2>

                {/* CONTENT */}
                <p className="
                  text-gray-600
                  leading-7
                  whitespace-pre-line
                  text-sm
                  md:text-base
                  mb-6
                ">
                  {post.content}
                </p>

                {/* TOGGLE COMMENTS */}
                <button
                  onClick={() => toggleComments(post._id)}
                  className="
                    w-full
                    sm:w-auto
                    flex
                    justify-center
                    items-center
                    gap-2
                    bg-slate-900
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    transition
                    text-sm
                    md:text-base
                  "
                >

                  <MessageCircle size={18} />

                  <span>
                    {openComments[post._id]
                      ? 'Masquer les commentaires'
                      : `Commentaires`}
                  </span>

                </button>

                {/* COMMENTS */}
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