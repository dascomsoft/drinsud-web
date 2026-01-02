import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Users,
  Briefcase,
  Home,
  Calendar,
  Landmark,
  Wrench,
  PiggyBank,
  UserCog,
  Target,
  Globe,
  Shield,
  FileText,
  Handshake,
  Upload,
  UserPlus,
  Percent,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Heart
} from 'lucide-react';

const Footer = () => {
  const services = [
    { id: 'invest', name: 'Investissements', icon: <Target className="w-4 h-4 mr-2" /> },
    { id: 'event', name: 'Évènementiel', icon: <Calendar className="w-4 h-4 mr-2" /> },
    { id: 'bati', name: 'Immobilier & Bâtiments', icon: <Building className="w-4 h-4 mr-2" /> },
    { id: 'foncier', name: 'Projets foncier', icon: <Landmark className="w-4 h-4 mr-2" /> },
    { id: 'humaine', name: 'Ressources Humaines', icon: <Users className="w-4 h-4 mr-2" /> },
    { id: 'finance', name: 'Épargne & finances', icon: <PiggyBank className="w-4 h-4 mr-2" /> },
    { id: 'gestion', name: 'Gestion de projets', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { id: 'sejour', name: 'Gestion de séjours', icon: <Globe className="w-4 h-4 mr-2" /> },
    { id: 'locale', name: 'Expertise locale', icon: <Wrench className="w-4 h-4 mr-2" /> }
  ];

  const companyLinks = [
    { name: 'Nos partenaires', path: '/entreprise', icon: <Handshake className="w-4 h-4 mr-2" /> },
    { name: 'Devenir partenaire', path: '/entreprise#devenir-partenaire', icon: <UserPlus className="w-4 h-4 mr-2" /> },
    { name: 'Charte partenariat', path: '/entreprise#charte', icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: 'Proposez service', path: '/entreprise#proposer-service', icon: <Upload className="w-4 h-4 mr-2" /> }
  ];

  const recruitmentLinks = [
    { name: "S'enregistrer", path: '/recrutement', icon: <UserPlus className="w-4 h-4 mr-2" /> },
    { name: 'Commission', path: '/recrutement#commission', icon: <Percent className="w-4 h-4 mr-2" /> }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: 'https://facebook.com/drinsud' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: 'https://twitter.com/drinsud' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://linkedin.com/company/drinsud' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: 'https://instagram.com/drinsud' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', url: 'https://youtube.com/drinsud' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/images/logoDrindsud.jpg"
                alt="DRINDSUD Logo"
                className="h-14 w-auto rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold font-teko text-orange-400">DRINDSUD</h2>
                <p className="text-gray-300 text-sm">Diaspora Roots Investment for Sustainable Development</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour les investissements, l'expertise locale et 
              le développement durable. Nous connectons la diaspora avec des opportunités 
              d'investissement et de croissance au Cameroun.
            </p>
            
            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-orange-300">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 font-teko flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.id}`}
                    className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {service.icon}
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 font-teko flex items-center">
              <Building className="w-5 h-5 mr-2" />
              ENTREPRISE
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 font-teko flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              CONTACT
            </h3>
            <div className="space-y-4">
              {/* Recrutement Links */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  RECRUTEMENT
                </h4>
                <ul className="space-y-3">
                  {recruitmentLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:+237699377664" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">+237 699 37 7664</p>
                    <p className="text-sm text-gray-400">Appel gratuit</p>
                  </div>
                </a>

                <a 
                  href="mailto:lepaneliste@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-orange-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">lepaneliste@gmail.com</p>
                    <p className="text-sm text-gray-400">Réponse sous 24h</p>
                  </div>
                </a>

                <div className="flex items-center text-gray-300 group">
                  <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-orange-500 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">455 Rue Martin</p>
                    <p className="text-sm text-gray-400">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Inscrivez-vous pour les dernières nouvelles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-5 h-5 text-orange-400 mr-2" />
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} DASCOM Ltd. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Gestion des cookies
              </Link>
              <div className="flex items-center text-gray-400">
                <Heart className="w-4 h-4 mr-1 text-red-500 animate-pulse" />
                <span className="text-sm">Made with passion</span>
              </div>
            </div>
          </div>
          
          {/* Back to top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;