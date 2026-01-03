import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, MessageCircle, User, Mail as MailIcon, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      id: 1,
      title: "LOCATION",
      content: "Address : 455 Rue Martin , Yaounde-CMR",
      icon: <MapPin size={40} className="text-orange-500 mx-auto" />,
      whatsappText: "📍 Adresse: 455 Rue Martin, Yaoundé-CMR"
    },
    {
      id: 2,
      title: "PHONE",
      content: "Tel : +237 (699-37-7664)",
      icon: <Phone size={40} className="text-orange-500 mx-auto" />,
      whatsappText: "📱 Téléphone: +237 699 37 7664"
    },
    {
      id: 3,
      title: "EMAIL",
      content: "Email: lepaneliste@gmail.com",
      icon: <Mail size={40} className="text-orange-500 mx-auto" />,
      whatsappText: "📧 Email: lepaneliste@gmail.com"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const { name, surname, email, message } = formData;
    if (!name || !surname || !email || !message) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);

    // Numéro WhatsApp de la structure
    const phoneNumber = '237699377664'; // Format: code pays + numéro sans +
    
    // Créer le message avec les informations du formulaire
    const whatsappMessage = `*Nouveau message de contact - DRINSUD*%0A%0A` +
                           `*Prénom:* ${name}%0A` +
                           `*Nom:* ${surname}%0A` +
                           `*Email:* ${email}%0A` +
                           `*Message:*%0A${message}%0A%0A` +
                           `---%0A` +
                           `*Informations de contact DRINSUD:*%0A` +
                           `${contactInfo[0].whatsappText}%0A` +
                           `${contactInfo[1].whatsappText}%0A` +
                           `${contactInfo[2].whatsappText}`;
    
    // Créer l'URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      setFormData({
        name: '',
        surname: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Afficher un message de confirmation
      alert('Ouvrez WhatsApp pour envoyer votre message. Si WhatsApp n\'est pas installé, vous serez redirigé vers la version web.');
    }, 1000);
  };

  return (
    <div className="contact-page overflow-x-hidden">
      {/* Section Call - Mobile Optimized */}
      <section 
        className="relative bg-cover bg-center py-16 md:py-24 lg:py-32"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/imageAbout2.jpg)',
          backgroundAttachment: 'scroll'
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-teko tracking-tight">
              Contactez-nous
            </h2>
            <p className="text-orange-500 text-base sm:text-lg md:text-xl mt-3 md:mt-4 max-w-3xl mx-auto px-2 sm:px-0">
              Contactez-nous pour toutes questions, collaborations ou informations supplémentaires.
              Nous sommes ravis d'échanger avec vous !
            </p>
          </div>

          {/* WhatsApp Call to Action */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="150">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-green-500/30">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Contact rapide via WhatsApp</h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    Remplissez le formulaire ci-dessous et envoyez directement sur WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8 py-4 md:py-8" data-aos="fade-up" data-aos-delay="200">
            {contactInfo.map((item) => (
              <div 
                key={item.id} 
                className="flex-1 max-w-md bg-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="mb-4 sm:mb-6">{item.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-teko mb-2 sm:mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile Optimized */}
      <section className="py-12 md:py-16 lg:py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Image */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="/images/ino3.jpg" 
                    alt="Contact Drinsud" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-teko mb-1 sm:mb-2">Notre équipe</h3>
                  <p className="text-sm sm:text-base md:text-lg italic opacity-90">Prête à vous accompagner</p>
                </div>
              </div>
              
              {/* WhatsApp Info Card */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-lg mr-3">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Pourquoi WhatsApp ?</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <MessageCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Réponse plus rapide (souvent instantanée)</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <MessageCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Possibilité d'envoyer des photos/documents</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <MessageCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Communication directe avec notre équipe</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    <span className="font-bold">Numéro WhatsApp:</span> +237 699 37 7664
                  </p>
                  <p className="text-xs text-green-700 mt-1">
                    Disponible du lundi au vendredi, 9h-18h
                  </p>
                </div>
              </div>
            </div>
            
            {/* Formulaire */}
            <div className="lg:w-1/2 w-full" data-aos="fade-left">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 font-teko mb-2">Envoyez-nous un message</h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
                  Remplissez le formulaire et envoyez directement via WhatsApp
                </p>
                
                <form onSubmit={handleWhatsAppSubmit}>
                  <div className="space-y-4 sm:space-y-6">
                    {/* Nom et Prénom en ligne sur desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Prénom */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <User className="w-4 h-4 mr-2 text-orange-500" />
                          <span>Prénom <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Nom de famille */}
                      <div>
                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <User className="w-4 h-4 mr-2 text-orange-500" />
                          <span>Nom <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="text"
                          id="surname"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <MailIcon className="w-4 h-4 mr-2 text-orange-500" />
                        <span>Email <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-orange-500" />
                        <span>Message <span className="text-red-500">*</span></span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows="4"
                        className="w-full border border-gray-300 px-4 sm:px-5 py-3 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>

                    {/* Bouton WhatsApp */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-12 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base sm:text-lg md:text-xl uppercase rounded-lg sm:rounded-xl transition-all duration-300 font-teko shadow-lg hover:shadow-xl active:scale-95 mt-4 sm:mt-6 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Préparation WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                          ENVOYER VIA WHATSAPP
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Message d'erreur */}
                {showError && (
                  <div 
                    className="mt-4 sm:mt-6 p-3 sm:p-4 text-center bg-red-50 border border-red-200 text-red-600 font-bold text-sm sm:text-base rounded-lg animate-pulse"
                    role="alert"
                  >
                    ⚠️ Veuillez remplir tous les champs obligatoires !
                  </div>
                )}

                {/* Instructions WhatsApp */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment ça marche ?
                    </h5>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                      <li>Remplissez tous les champs du formulaire</li>
                      <li>Cliquez sur "Envoyer via WhatsApp"</li>
                      <li>WhatsApp s'ouvrira avec votre message pré-rempli</li>
                      <li>Vérifiez et envoyez le message à notre équipe</li>
                      <li>Nous vous répondrons rapidement</li>
                    </ol>
                  </div>
                </div>

                {/* Note légale */}
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    En nous contactant, vous acceptez notre{' '}
                    <a href="/politique-confidentialite" className="text-orange-500 hover:underline">
                      politique de confidentialité
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct WhatsApp Button - Fixed on Mobile */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden" data-aos="fade-up" data-aos-delay="300">
        <a
          href="https://wa.me/237699377664"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition-all duration-300"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;