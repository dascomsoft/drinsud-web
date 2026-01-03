import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowDown,
  User,
  Building,
  Map,
  Briefcase,
  Calendar,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recrutement = () => {
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    ville: '',
    email: '',
    occupation: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
    window.scrollTo(0, 0);
  }, []);

  const commissionnaireTasks = [
    'Achat et livraisons divers',
    'Dépôt et retrait de dossiers pour des formalités administratives',
    'Paiement des frais scolaires des enfants, des factures en tous genres et des ordonnances médicales',
    'Assistance aux proches du client à l\'occasion d\'un événement ou pour l\'achat d\'un bien',
    'Main d\'œuvre'
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    // Validation
    const { name, surname, ville, email, occupation } = formData;
    if (!name || !surname || !ville || !email || !occupation) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);

    // Numéro WhatsApp de la structure (format international sans +)
    const phoneNumber = '237699377664'; // Remplacez par le numéro réel
    
    // Créer le message avec les informations du formulaire
    const message = `*Nouvelle candidature commissionnaire DRINSUD*%0A%0A` +
                   `*Prénom:* ${name}%0A` +
                   `*Nom:* ${surname}%0A` +
                   `*Ville:* ${ville}%0A` +
                   `*Email:* ${email}%0A` +
                   `*Occupation:* ${occupation}%0A%0A` +
                   `Je souhaite postuler en tant que commissionnaire chez DRINSUD.`;
    
    // Créer l'URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      setFormData({
        name: '',
        surname: '',
        ville: '',
        email: '',
        occupation: ''
      });
      setIsSubmitting(false);
      
      // Afficher un message de confirmation
      alert('Ouvrez WhatsApp pour envoyer votre candidature. Assurez-vous d\'avoir WhatsApp installé sur votre appareil.');
    }, 1000);
  };

  return (
    <div className="recrutement-page overflow-x-hidden">
      {/* Section Commissionnaire - Mobile Optimized */}
      <section 
        className="relative bg-cover bg-center py-12 md:py-20 lg:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/business-partners.jpg)',
          backgroundAttachment: 'scroll'
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-teko mb-6 md:mb-8" data-aos="fade-up">
              Le commissionnaire
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Le commissionnaire est un employé à temps partiel au sein de DRINSUD. Il se rend disponible pour 
              effectuer des tâches ponctuelles pour des clients qui sollicitent nos services.
            </p>
            
            <div className="space-y-3 md:space-y-4" data-aos="fade-up" data-aos-delay="200">
              {commissionnaireTasks.map((task, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-0.5 mr-3 sm:mr-4 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-200">{task}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp Info */}
            <div className="mt-8 md:mt-12 bg-green-50 border border-green-200 rounded-xl p-4 md:p-6" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Postulez via WhatsApp</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Remplissez le formulaire ci-dessous et envoyez votre candidature directement sur WhatsApp.
                    Notre équipe vous répondra rapidement.
                  </p>
                  <div className="mt-3 flex items-center text-green-600 text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Contact: +237 699 37 7664</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Devenir Commissionnaire - Mobile Optimized */}
      <section className="bg-gradient-to-b from-gray-100 to-blue-50 py-12 md:py-20 lg:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-teko mb-6 md:mb-8" data-aos="fade-up">
              Comment être commissionnaire
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 md:mb-12 leading-relaxed px-2 sm:px-0" data-aos="fade-up" data-aos-delay="100">
              Pour devenir commissionnaire chez DRINSUD, remplissez le formulaire ci-dessous et envoyez votre 
              candidature via WhatsApp en un clic. Notre équipe vous contactera pour un entretien.
            </p>
            
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="200">
              {[
                { number: '1', text: 'Remplissez le formulaire', icon: '📝' },
                { number: '2', text: 'Envoyez via WhatsApp', icon: '📱' },
                { number: '3', text: 'Attendez notre appel', icon: '📞' }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 mx-auto">
                    {step.number}
                  </div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-12" data-aos="zoom-in" data-aos-delay="300">
              <ArrowDown className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Recrutement - Mobile Optimized */}
      <section 
        className="relative bg-cover bg-center py-12 md:py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/ino10.jpg)',
          backgroundAttachment: 'scroll'
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white font-teko mb-6 md:mb-8" data-aos="fade-up">
              Postulez via WhatsApp
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto px-2 sm:px-0" data-aos="fade-up" data-aos-delay="100">
              Postulez en quelques minutes seulement. Remplissez le formulaire et envoyez votre candidature 
              directement sur WhatsApp à notre équipe RH.
            </p>
            <div className="mt-8 md:mt-12" data-aos="zoom-in" data-aos-delay="200">
              <ArrowDown className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'enregistrement - Mobile Optimized */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12" data-aos="fade-up">
            Formulaire de candidature
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Image */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="/images/partner1.jpg" 
                    alt="Recrutement DRINSUD" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-teko mb-1 sm:mb-2">Postulez maintenant</h3>
                  <p className="text-sm sm:text-base md:text-lg italic opacity-90">Envoyez votre candidature via WhatsApp</p>
                </div>
              </div>
              
              {/* WhatsApp Info Card */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 sm:p-6 border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-lg mr-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Avantages WhatsApp</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Réponse rapide (sous 24h)</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Communication directe avec notre équipe</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Possibilité d'envoyer des documents</span>
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
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200">
                <div className="space-y-4 sm:space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-orange-500" />
                      <span>Prénom <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Ville */}
                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Map className="w-4 h-4 mr-2 text-orange-500" />
                      <span>Ville de résidence <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      placeholder="Votre ville"
                      className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-orange-500" />
                      <span>Email <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-orange-500" />
                      <span>Occupation <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Votre métier/profession"
                      className="w-full h-12 sm:h-14 border border-gray-300 px-4 sm:px-5 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Bouton WhatsApp */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    disabled={isSubmitting}
                    className={`w-full h-12 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base sm:text-lg md:text-xl uppercase rounded-lg sm:rounded-xl transition-all duration-300 font-teko shadow-lg hover:shadow-xl active:scale-95 mt-4 sm:mt-8 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Préparation...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                        ENVOYER VIA WHATSAPP
                      </>
                    )}
                  </button>
                </div>

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
                      <li>Envoyez le message à notre équipe RH</li>
                      <li>Nous vous répondrons sous 24h ouvrées</li>
                    </ol>
                  </div>
                </div>

                {/* Note légale */}
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    En envoyant votre candidature, vous acceptez notre 
                    <Link to="/politique-confidentialite" className="text-orange-500 hover:underline mx-1">
                      politique de confidentialité
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations de contact - Mobile Optimized */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 font-teko" data-aos="fade-up">
              Contactez notre équipe RH
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-green-500 p-3 sm:p-4 rounded-full">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-teko">WhatsApp</h3>
                <a 
                  href="https://wa.me/237699377664" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-200 transition-colors text-base sm:text-lg block"
                >
                  +237 699 37 7664
                </a>
                <p className="text-gray-300 text-xs sm:text-sm mt-2">Candidatures & Informations</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-orange-500 p-3 sm:p-4 rounded-full">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-teko">Téléphone</h3>
                <a 
                  href="tel:+237699377664" 
                  className="text-orange-300 hover:text-orange-200 transition-colors text-base sm:text-lg block"
                >
                  +237 699 37 7664
                </a>
                <p className="text-gray-300 text-xs sm:text-sm mt-2">Appels directs</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-green-500 p-3 sm:p-4 rounded-full">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-teko">Adresse</h3>
                <p className="text-green-300 text-base sm:text-lg">455 Rue Martin, Yaoundé-CMR</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2">Siège social</p>
              </div>
            </div>

            <div className="mt-12 md:mt-16" data-aos="fade-up" data-aos-delay="400">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 px-2 sm:px-0">
                Notre équipe des ressources humaines est disponible du lundi au vendredi, 
                de 9h00 à 18h00. Privilégiez WhatsApp pour une réponse plus rapide.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Autre demande de contact
              </Link>
            </div>

            {/* FAQ WhatsApp */}
            <div className="mt-12 md:mt-16 text-left" data-aos="fade-up" data-aos-delay="500">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-green-300">FAQ WhatsApp</h4>
              <div className="space-y-3">
                {[
                  { 
                    q: 'Dois-je avoir WhatsApp installé ?', 
                    a: 'Oui, l\'application WhatsApp doit être installée sur votre appareil' 
                  },
                  { 
                    q: 'Quel est le délai de réponse ?', 
                    a: 'Sous 24h ouvrées via WhatsApp' 
                  },
                  { 
                    q: 'Puis-je envoyer des documents ?', 
                    a: 'Oui, vous pourrez envoyer CV et pièces via WhatsApp' 
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <p className="font-medium text-sm sm:text-base">{faq.q}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recrutement;