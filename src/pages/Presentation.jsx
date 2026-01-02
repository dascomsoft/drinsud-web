import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Globe,
  Building,
  Users,
  TrendingUp,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  HeartHandshake,
  Rocket
} from 'lucide-react';

const Presentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missions = [
    "Concrétiser les projets de la diaspora dans le pays et offrir des prestations diverses afin d'encourager son investissement ;",
    "Améliorer la compréhension du rapport migration et développement et promouvoir sa prise en compte dans les politiques de développement au Cameroun dans le cadre d'études et activités spécifiques ;",
    "Accompagner le gouvernement et les CTD dans la conception et la mise en œuvre des stratégies de mobilisation de la diaspora ;",
    "Contribuer à la lutte contre l'immigration clandestine à travers l'entrepreneuriat, l'investissement et le placement international de la main d'œuvre locale ;",
    "Promouvoir la migration circulaire et le transfert de savoirs entre la diaspora et les organisations locales ;",
    "Promouvoir le management de projet dans les petites et moyennes entreprises à travers le coaching et les formations à la carte."
  ];

  const actions = [
    "Montage et gestion de Projet de codéveloppement et de coopération décentralisée ;",
    "Dans la mise en place de l'action internationale des CTD (stratégie de codéveloppement, stratégie de coopération décentralisée, stratégie de marketing territorial, Agenda 21 local) ;",
    "Montage, gestion et réalisation des projets investissements de la diaspora (projet immobilier, projet d'investissement, projet foncier, projets sociaux, projet évènementiel) ;",
    "Prestation de service divers à la diaspora (gestion du séjour au pays, conseil, facilitations, gestion de l'épargne, suivi, courses, tourisme et gestion de projets spécifiques) ;",
    "Recherche de financement pour les projets de développement durable ;",
    "Réalisation d'études spécifiques et Production des données statistiques sur le codéveloppement, le développement local, les migrations internationales et l'action internationale des CTD au Cameroun ;",
    "Entrepreneuriat jeunes et investissement divers."
  ];

  return (
    <div className="presentation-page">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/finance.jpg)'
        }}
        data-aos="fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-teko leading-tight">
              QUI SOMMES-NOUS?
            </h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90">
              DRINDSUD est un cabinet d'expertise et d'investissement en matière de codéveloppement, 
              coopération décentralisée, développement local durable et gestion de projets qui vise 
              principalement à fournir des prestations diverses prioritairement, à la diaspora camerounaise 
              mais aussi aux particuliers et organisations qui nous sollicitent.
            </p>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
              Nous accompagnons l'État et les collectivités locales à travers des outils adaptés de 
              mobilisation de la diaspora pour le développement durable. Nous promouvons la prise en 
              compte du rapport migration-développement et la lutte contre l'immigration clandestine 
              à travers l'entrepreneuriat et l'investissement jeune.
            </p>
            <Link 
              to="/entreprise" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              En savoir plus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="/images/ino2.jpg" 
                  alt="Notre Mission" 
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-teko">
                  NOTRE MISSION
                </h2>
              </div>
              
              <div className="space-y-6">
                {missions.map((mission, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { value: '100+', label: 'Projets Réalisés', icon: <Rocket className="w-5 h-5" /> },
                  { value: '15+', label: 'Années d\'Expérience', icon: <Briefcase className="w-5 h-5" /> },
                  { value: '50+', label: 'Clients Satisfaits', icon: <Users className="w-5 h-5" /> },
                  { value: '10+', label: 'Pays Desservis', icon: <Globe className="w-5 h-5" /> }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-xl shadow-md text-center"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-blue-500 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-teko">
                  NOS ACTIONS
                </h2>
              </div>
              
              <div className="space-y-6">
                {actions.map((action, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-green-100 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{action}</p>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: 'Innovation', 
                    description: 'Nous prônons l\'innovation constante pour améliorer nos services',
                    color: 'bg-purple-100 text-purple-600'
                  },
                  { 
                    title: 'Transparence', 
                    description: 'Transparence totale dans toutes nos transactions et collaborations',
                    color: 'bg-blue-100 text-blue-600'
                  },
                  { 
                    title: 'Confiance', 
                    description: 'Établir des relations de confiance durables avec nos partenaires',
                    color: 'bg-orange-100 text-orange-600'
                  },
                  { 
                    title: 'Engagement', 
                    description: 'Engagement total envers le succès de chaque projet',
                    color: 'bg-green-100 text-green-600'
                  }
                ].map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`inline-block p-3 rounded-lg mb-4 ${value.color}`}>
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
              <div className="relative">
                <img 
                  src="/images/ino5.jpg" 
                  alt="Nos Actions" 
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-16 md:py-24 bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/invest7.jpg)'
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div data-aos="fade-up">
              <span className="text-orange-400 font-semibold text-lg mb-2 block flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Envie de travailler avec nous ?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-teko leading-tight">
                Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
              </h2>
            </div>

            <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg text-gray-200 leading-relaxed">
                Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? 
                Chez nous, chaque membre est un pilier essentiel de notre succès. Découvrez des défis 
                inspirants, une culture collaborative et des opportunités de croissance. Ensemble, 
                bâtissons l'avenir et donnez vie à vos ambitions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactez-nous
              </Link>
              
              <Link 
                to="/recrutement"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Postuler maintenant
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Téléphone</h4>
                <a href="tel:+237699377664" className="text-orange-300 hover:text-orange-200 transition-colors">
                  +237 699 37 7664
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <a href="mailto:lepaneliste@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  lepaneliste@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Adresse</h4>
                <p className="text-green-300">455 Rue Martin, Yaoundé-CMR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;