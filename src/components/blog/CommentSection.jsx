import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, User, ThumbsUp, Send } from 'lucide-react';

import { API_URL } from '../../config/api';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const [likedComments, setLikedComments] = useState({});

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_URL}/comments/post/${postId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Erreur chargement commentaires:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.author.trim() || !newComment.text.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/comments`, {
        postId,
        author: newComment.author.trim(),
        text: newComment.text.trim(),
      });
      
      setComments([response.data, ...comments]);
      setNewComment({ author: '', text: '' });
    } catch (error) {
      console.error('Erreur publication commentaire:', error);
      alert('Erreur lors de la publication');
    }
  };

  const handleLikeComment = async (commentId) => {
    if (likedComments[commentId]) return;
    
    try {
      await axios.post(`${API_URL}/comments/${commentId}/like`);
      setComments(comments.map(comment =>
        comment._id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      ));
      setLikedComments({ ...likedComments, [commentId]: true });
    } catch (error) {
      console.error('Erreur like commentaire:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement des commentaires...</div>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <MessageCircle size={24} />
        Commentaires ({comments.length})
      </h3>

      {/* Liste des commentaires */}
      <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment._id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-primary" />
                    <span className="font-semibold text-gray-800">{comment.author}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
                <button 
                  onClick={() => handleLikeComment(comment._id)}
                  className={`flex items-center gap-1 text-sm transition ml-4 ${
                    likedComments[comment._id] ? 'text-primary' : 'text-gray-500 hover:text-primary'
                  }`}
                  disabled={likedComments[comment._id]}
                >
                  <ThumbsUp size={14} />
                  <span>{comment.likes}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle size={48} className="mx-auto mb-2 opacity-30" />
            <p>Soyez le premier à commenter cette annonce !</p>
          </div>
        )}
      </div>

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmitComment} className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Laisser un commentaire</h4>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Votre pseudo"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            required
          />
          <textarea
            rows="3"
            placeholder="Votre message..."
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition flex items-center gap-2"
          >
            <Send size={18} />
            Publier le commentaire
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;