import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
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
  Calendar
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recrutement = () => {
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    ville: '',
    email: '',
    occupation: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const { name, surname, ville, email, occupation } = formData;
    if (!name || !surname || !ville || !email || !occupation) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    // Soumission du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre candidature a été envoyée avec succès ! Nous vous contacterons bientôt.');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      surname: '',
      ville: '',
      email: '',
      occupation: ''
    });
  };

  return (
    <div className="recrutement-page">
      {/* <Header /> */}
      
      {/* Section Commissionnaire */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/business-partners.jpg)'
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-teko mb-8" data-aos="fade-up">
              Le commissionnaire
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Le commissionnaire est un employé à temps partiel au sein de DRINSUD. Il se rend disponible pour 
              effectuer des tâches ponctuelles pour des clients qui sollicitent nos services. S'il dispose d'une 
              compétence particulière, il peut également être mobilisé à la demande.
            </p>
            
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              {commissionnaireTasks.map((task, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <p className="text-lg text-gray-200">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Devenir Commissionnaire */}
      <section className="bg-gradient-to-b from-gray-100 to-blue-50 py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-teko mb-8" data-aos="fade-up">
              Comment être commissionnaire
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Pour devenir commissionnaire chez DRINSUD, enregistrez-vous sur notre site et renseignez les 
              informations demandées. L'entreprise vous contactera pour un entretien.
            </p>
            
            <div className="mt-12" data-aos="zoom-in" data-aos-delay="200">
              <ArrowDown className="w-16 h-16 text-orange-500 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Recrutement */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/ino10.jpg)'
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-teko mb-8" data-aos="fade-up">
              S'enregistrer/
            </h1>
            <div className="mt-12" data-aos="zoom-in" data-aos-delay="200">
              <ArrowDown className="w-16 h-16 text-orange-500 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'enregistrement */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12" data-aos="fade-up">
            Formulaire d'enregistrement
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Image */}
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/partner1.jpg" 
                  alt="Recrutement DRINSUD" 
                  className="w-full h-96 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold font-teko mb-2">Rejoignez-nous</h3>
                  <p className="font-script italic text-lg">Votre carrière commence ici</p>
                </div>
              </div>
            </div>
            
            {/* Formulaire */}
            <div className="lg:w-1/2" data-aos="fade-left">
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200"
              >
                <div className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-teko">
                      <User className="inline w-4 h-4 mr-2" />
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Nom de famille */}
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2 font-teko">
                      <User className="inline w-4 h-4 mr-2" />
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Ville */}
                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2 font-teko">
                      <Map className="inline w-4 h-4 mr-2" />
                      Ville de résidence *
                    </label>
                    <input
                      type="text"
                      id="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      placeholder="Votre ville"
                      className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-teko">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2 font-teko">
                      <Briefcase className="inline w-4 h-4 mr-2" />
                      Occupation *
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Votre métier/profession"
                      className="w-full h-14 border border-gray-300 px-5 rounded-xl focus:outline-none focus:ring-3 focus:ring-orange-500/50 focus:border-orange-500 font-script italic text-lg transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    className="w-full h-16 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl uppercase rounded-xl transition-all duration-300 font-teko shadow-lg hover:shadow-xl active:scale-95 mt-8"
                  >
                    SOUMETTRE LA CANDIDATURE
                  </button>
                </div>

                {/* Message d'erreur */}
                {showError && (
                  <div 
                    className="mt-6 p-4 text-center bg-red-50 border border-red-200 text-red-600 font-bold text-lg rounded-lg animate-pulse"
                    role="alert"
                  >
                    ⚠️ Veuillez remplir tous les champs obligatoires !
                  </div>
                )}

                {/* Note légale */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    En soumettant ce formulaire, vous acceptez notre 
                    <Link to="/politique-confidentialite" className="text-orange-500 hover:underline mx-1">
                      politique de confidentialité
                    </Link>
                    et nos
                    <Link to="/conditions" className="text-orange-500 hover:underline mx-1">
                      conditions d'utilisation
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations de contact */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16 md:py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-teko" data-aos="fade-up">
              Contactez notre équipe RH
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-orange-500 p-4 rounded-full">
                    <Phone className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-teko">Téléphone</h3>
                <a 
                  href="tel:+237699377664" 
                  className="text-orange-300 hover:text-orange-200 transition-colors text-lg"
                >
                  +237 699 37 7664
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-blue-500 p-4 rounded-full">
                    <Mail className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-teko">Email</h3>
                <a 
                  href="mailto:lepaneliste@gmail.com" 
                  className="text-blue-300 hover:text-blue-200 transition-colors text-lg"
                >
                  lepaneliste@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-500 p-4 rounded-full">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-teko">Adresse</h3>
                <p className="text-green-300 text-lg">455 Rue Martin, Yaoundé-CMR</p>
              </div>
            </div>

            <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
              <p className="text-gray-300 text-lg mb-8">
                Notre équipe des ressources humaines est disponible du lundi au vendredi, 
                de 9h00 à 18h00, pour répondre à toutes vos questions concernant le recrutement.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Recrutement;