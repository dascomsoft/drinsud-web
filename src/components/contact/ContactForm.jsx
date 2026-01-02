import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(e);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-teko">
            Prénom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre prénom"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="surname" className="block text-sm font-medium text-gray-700 font-teko">
            Nom *
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Votre nom"
            value={formData.surname}
            onChange={handleChange}
            className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-teko">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="votre.email@exemple.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-teko">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Votre message ici..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg resize-y min-h-[150px] transition-all duration-300"
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-16 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl uppercase rounded-xl transition-all duration-300 font-teko flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:scale-95"
      >
        {isSubmitting ? (
          <>
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={24} />
            ENVOYER LE MESSAGE
          </>
        )}
      </button>
      
      <p className="text-gray-500 text-sm text-center mt-4">
        * Champs obligatoires
      </p>
    </form>
  );
};

export default ContactForm;