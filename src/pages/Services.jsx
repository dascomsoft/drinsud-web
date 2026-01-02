import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCategory from '../components/services/ServiceCategory';
import {
  Calendar,
  Landmark,
  Building,
  PiggyBank,
  Users,
  Target,
  Briefcase,
  Globe,
  Wrench,
  ArrowDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChefHat,
  Gift,
  Music,
  Paintbrush,
  UsersRound,
  Mic,
  Piano,
  Shield,
  Handshake,
  FileText,
  Home,
  Car,
  Scissors,
  ClipboardCheck,
  ShoppingCart,
  Utensils,
  FilePenLine,
  BookOpen,
  Network,
  GraduationCap,
  Wallet,
  Building2,
  ClipboardList,
  Leaf,
  Truck,
  Factory,
  BarChart,
  Lightbulb,
  HeartPulse,
  Wifi,
  Coffee,
  Package,
  Globe2,
  FileSearch
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      id: 'event',
      title: 'Rubrique Évènementiel',
      subtitle: 'Événementiel Enchanté',
      description: 'Découvrez l\'art de créer des moments mémorables avec notre expertise événementielle exceptionnelle.',
      image: '/images/evento.jpg',
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      textColor: 'text-red-600',
      services: [
        { 
          name: 'Service traiteur', 
          icon: <ChefHat className="w-5 h-5" />,
          shortDescription: 'Cuisine raffinée pour vos événements'
        },
        { 
          name: 'Event planner (mariage, anniversaire)', 
          icon: <Calendar className="w-5 h-5" />,
          shortDescription: 'Organisation complète de vos événements'
        },
        { 
          name: 'Cadeaux surprises (mariages, etc.)', 
          icon: <Gift className="w-5 h-5" />,
          shortDescription: 'Idées cadeaux personnalisées'
        },
        { 
          name: 'Sonorisation', 
          icon: <Music className="w-5 h-5" />,
          shortDescription: 'Équipement audio professionnel'
        },
        { 
          name: 'Décoration', 
          icon: <Paintbrush className="w-5 h-5" />,
          shortDescription: 'Décoration sur mesure pour vos événements'
        },
        { 
          name: 'Orchestre', 
          icon: <UsersRound className="w-5 h-5" />,
          shortDescription: 'Groupes musicaux professionnels'
        },
        { 
          name: 'Piano Bar', 
          icon: <Piano className="w-5 h-5" />,
          shortDescription: 'Animation musicale élégante'
        },
        { 
          name: 'Maitre de cérémonie', 
          icon: <Mic className="w-5 h-5" />,
          shortDescription: 'Animation professionnelle de vos événements'
        },
        { 
          name: 'Chorale', 
          icon: <UsersRound className="w-5 h-5" />,
          shortDescription: 'Ensembles vocaux pour cérémonies'
        },
        { 
          name: 'Protocole', 
          icon: <FileText className="w-5 h-5" />,
          shortDescription: 'Organisation protocolaire'
        },
        { 
          name: 'Garçons et filles d\'honneur', 
          icon: <Handshake className="w-5 h-5" />,
          shortDescription: 'Assistance personnalisée'
        },
        { 
          name: 'Sécurité', 
          icon: <Shield className="w-5 h-5" />,
          shortDescription: 'Service de sécurité professionnel'
        },
        { 
          name: 'Fanfare, etc.', 
          icon: <Music className="w-5 h-5" />,
          shortDescription: 'Groupes musicaux traditionnels'
        }
      ]
    },
    {
      id: 'foncier',
      title: 'Rubrique Projet foncier',
      subtitle: 'Rêves en Réalité',
      description: 'Explorez de nouveaux horizons avec DRINDSUD, où le Projet Foncier devient une aventure passionnante. Transformons vos idées en réalité tangible.',
      image: '/images/foncier2.jpg',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
      textColor: 'text-blue-600',
      services: [
        { 
          name: 'Achat de terrains', 
          icon: <Landmark className="w-5 h-5" />,
          shortDescription: 'Acquisition de terrains sécurisée'
        },
        { 
          name: 'Titre foncier', 
          icon: <FileText className="w-5 h-5" />,
          shortDescription: 'Régularisation foncière complète'
        }
      ]
    },
    {
      id: 'bati',
      title: 'Rubrique Immobilier & Bâtiments',
      subtitle: 'Construire Demain',
      description: 'Découvrez l\'art de bâtir l\'avenir avec DRINDSUD. Notre expertise en Bâtiment & Immobilier crée des espaces qui transcendent les attentes.',
      image: '/images/bati.jpg',
      color: 'bg-green-50',
      iconColor: 'text-green-500',
      textColor: 'text-green-600',
      services: [
        { 
          name: 'Construction maison clés en main', 
          icon: <Home className="w-5 h-5" />,
          shortDescription: 'Construction complète de votre maison'
        },
        { 
          name: 'Devis de vos maisons', 
          icon: <ClipboardList className="w-5 h-5" />,
          shortDescription: 'Étude et estimation de vos projets'
        },
        { 
          name: 'Études et Plan architecturaux', 
          icon: <Building2 className="w-5 h-5" />,
          shortDescription: 'Conception architecturale professionnelle'
        },
        { 
          name: 'Dessin bâtiment', 
          icon: <Paintbrush className="w-5 h-5" />,
          shortDescription: 'Plans techniques détaillés'
        },
        { 
          name: 'Contrôle et suivi des travaux BTP', 
          icon: <ClipboardCheck className="w-5 h-5" />,
          shortDescription: 'Supervision qualité des chantiers'
        }
      ]
    },
    {
      id: 'finance',
      title: 'Rubrique Gestion de l\'Épargne et des Transactions Financières',
      subtitle: 'Chemin vers la Prospérité',
      description: 'Nous sécurisons votre argent dans le pays d\'origine en vue de l\'investissement ou pour des activités spécifiques à travers nos banques partenaires.',
      image: '/images/finance1.jpg',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
      textColor: 'text-purple-600',
      services: [
        { 
          name: 'Paiements divers', 
          icon: <Wallet className="w-5 h-5" />,
          shortDescription: 'Gestion des transactions financières'
        },
        { 
          name: 'Épargne pour des activités et projets spécifiques', 
          icon: <PiggyBank className="w-5 h-5" />,
          shortDescription: 'Solutions d\'épargne personnalisées'
        },
        { 
          name: 'Gestion des transactions financières', 
          icon: <Wallet className="w-5 h-5" />,
          shortDescription: 'Optimisation de vos flux financiers'
        }
      ]
    },
    {
      id: 'humaine',
      title: 'Rubrique Ressources Humaines',
      subtitle: 'Cultiver le Talent',
      description: 'Nous mettons à votre disposition de la diaspora, des particuliers ou entreprises, l\'expertise et la ressource humaine qualifiée dans divers domaines.',
      image: '/images/human2.jpg',
      color: 'bg-orange-50',
      iconColor: 'text-orange-500',
      textColor: 'text-orange-600',
      services: [
        { 
          name: 'Mise à disposition de compétences pour des travaux spécifiques', 
          icon: <Users className="w-5 h-5" />,
          shortDescription: 'Recrutement de profils spécialisés'
        },
        { 
          name: 'Recherche des profils pour des structures et projets spécifiques', 
          icon: <FileSearch className="w-5 h-5" />,
          shortDescription: 'Chasse de tête personnalisée'
        },
        { 
          name: 'Placement international de la main d\'œuvre locale', 
          icon: <Globe2 className="w-5 h-5" />,
          shortDescription: 'Mobilité professionnelle internationale'
        }
      ]
    },
    {
      id: 'invest',
      title: 'Rubrique Investissements',
      subtitle: 'Naviguez Vers la Prospérité',
      description: 'Plongez dans l\'univers passionnant de l\'Investissement avec DRINDSUD. Explorez des stratégies judicieuses vers un avenir financier prospère.',
      image: '/images/finance.jpg',
      color: 'bg-amber-50',
      iconColor: 'text-amber-500',
      textColor: 'text-amber-600',
      services: [
        { 
          name: 'Production et commercialisation de produits biologiques', 
          icon: <Leaf className="w-5 h-5" />,
          shortDescription: 'Agriculture biologique et commercialisation'
        },
        { 
          name: 'Montage et réalisation des projets d\'entrepreneuriat agricole', 
          icon: <Truck className="w-5 h-5" />,
          shortDescription: 'Projets agricoles clés en main'
        },
        { 
          name: 'Création et gestion d\'exploitations agropastorales', 
          icon: <Factory className="w-5 h-5" />,
          shortDescription: 'Gestion d\'exploitations agricoles'
        },
        { 
          name: 'Transformation des produits agricoles', 
          icon: <Package className="w-5 h-5" />,
          shortDescription: 'Valorisation des produits agricoles'
        },
        { 
          name: 'Paiements divers', 
          icon: <Wallet className="w-5 h-5" />,
          shortDescription: 'Solutions de paiement sécurisées'
        }
      ]
    },
    {
      id: 'gestion',
      title: 'Rubrique Gestion de projets',
      subtitle: 'Vision en Action',
      description: 'Bienvenue dans l\'univers dynamique de la Gestion de Projet chez DRINDSUD. Du concept à la réalisation, nous sommes vos partenaires de confiance.',
      image: '/images/manage2.jpg',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-500',
      textColor: 'text-indigo-600',
      services: [
        { 
          name: 'Accompagnement dans le montage de projet', 
          icon: <Briefcase className="w-5 h-5" />,
          shortDescription: 'Support pour la création de projets'
        },
        { 
          name: 'Contrôle et suivi des projets de la diaspora', 
          icon: <ClipboardCheck className="w-5 h-5" />,
          shortDescription: 'Monitoring de vos investissements'
        }
      ]
    },
    {
      id: 'sejour',
      title: 'Rubrique Gestion de séjours',
      subtitle: 'Réaliser Vos Rêves d\'Aventure',
      description: 'Bienvenue dans la rubrique dédiée à la gestion de séjour avec DRINDSUD. Nous vous offrons une expérience exceptionnelle pour un séjour agréable au pays.',
      image: '/images/sejour.jpg',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
      textColor: 'text-cyan-600',
      services: [
        { 
          name: 'Mise à disposition du logement temporaire (logements meublés)', 
          icon: <Home className="w-5 h-5" />,
          shortDescription: 'Location d\'appartements meublés'
        },
        { 
          name: 'Mise à disposition de véhicules (taxi et personnel)', 
          icon: <Car className="w-5 h-5" />,
          shortDescription: 'Service de transport avec chauffeur'
        },
        { 
          name: 'Sécurité personnelle', 
          icon: <Shield className="w-5 h-5" />,
          shortDescription: 'Protection personnalisée'
        },
        { 
          name: 'Courses diverses pour nos clients', 
          icon: <ShoppingCart className="w-5 h-5" />,
          shortDescription: 'Service de courses personnalisé'
        },
        { 
          name: 'Service d\'entretien temporaire des locaux, domiciles ou des bureaux', 
          icon: <Wrench className="w-5 h-5" />,
          shortDescription: 'Ménage et entretien professionnel'
        },
        { 
          name: 'Procédures administratives', 
          icon: <FileText className="w-5 h-5" />,
          shortDescription: 'Accompagnement administratif'
        },
        { 
          name: 'Soins à domicile (coiffure, make up, soins de santé, manucure et pédicure)', 
          icon: <Scissors className="w-5 h-5" />,
          shortDescription: 'Services de bien-être à domicile'
        },
        { 
          name: 'Réservations diverses', 
          icon: <Calendar className="w-5 h-5" />,
          shortDescription: 'Réservation hôtels, restaurants, etc.'
        },
        { 
          name: 'Gestion de colis et transactions diverses au pays', 
          icon: <Package className="w-5 h-5" />,
          shortDescription: 'Envoi et réception de colis'
        },
        { 
          name: 'Restauration à domicile', 
          icon: <Utensils className="w-5 h-5" />,
          shortDescription: 'Service de restauration privée'
        },
        { 
          name: 'Traduction de documents etc', 
          icon: <FilePenLine className="w-5 h-5" />,
          shortDescription: 'Traduction et interprétariat'
        },
        { 
          name: 'Activités de loisirs et tourisme', 
          icon: <Globe className="w-5 h-5" />,
          shortDescription: 'Organisation d\'activités touristiques'
        },
        { 
          name: 'Travaux de dépannage à domicile', 
          icon: <Wrench className="w-5 h-5" />,
          shortDescription: 'Réparation et dépannage urgent'
        }
      ]
    },
    {
      id: 'locale',
      title: 'Rubrique Expertise Locale',
      subtitle: 'Une Immersion Authentique dans Chaque Destination',
      description: 'Nous mettons à la disposition des collectivités territoriales, de l\'État et de toute organisation, une expertise variée et adaptée à leurs besoins.',
      image: '/images/expertise.jpeg',
      color: 'bg-teal-50',
      iconColor: 'text-teal-500',
      textColor: 'text-teal-600',
      services: [
        { 
          name: 'Recherche de financements internationaux pour les projets de développement durable', 
          icon: <Target className="w-5 h-5" />,
          shortDescription: 'Levée de fonds internationaux'
        },
        { 
          name: 'Accompagnement des Collectivités territoriales dans la mise en place de leur stratégie d\'action international et de codéveloppement', 
          icon: <Network className="w-5 h-5" />,
          shortDescription: 'Coopération internationale territoriale'
        },
        { 
          name: 'Réalisation d\'études spécifiques et Production des données statistiques', 
          icon: <BarChart className="w-5 h-5" />,
          shortDescription: 'Études et analyses statistiques'
        },
        { 
          name: 'Coaching et formation des organisations et PME en matière de montage et gestion de projet et développement durable', 
          icon: <GraduationCap className="w-5 h-5" />,
          shortDescription: 'Formation et coaching organisationnel'
        }
      ]
    }
  ];

  // Sections supplémentaires (Crowdfunding et Migration circulaire)
  const additionalSections = [
    {
      title: 'Crowdfunding et Partage d\'Expérience',
      subtitle: 'Promotion du volontariat et de la migration circulaire de la diaspora pour le développement local',
      description: 'Notre cabinet souhaite devenir une plateforme de mobilisation du volontariat des membres de la diaspora pour le développement local. Ainsi, nous solliciterons l\'expertise des membres de la diaspora pour la résolution des problèmes concrets et spécifiques.',
      image: '/images/partner1.jpg'
    },
    {
      title: 'Réseau d\'Échange et d\'Expertise',
      subtitle: 'Mise en place d\'un réseau d\'échange et d\'expertise entre la diaspora et les acteurs locaux',
      description: 'Notre cabinet promeut le partage d\'expériences, de compétences et de ressources entre les membres de la diaspora et les personnes, entreprises ou associations. Nous comptons mettre en place un système de collaboration permanente avec les membres de la diaspora pour le développement local.',
      image: '/images/partner2.jpg'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/ino8.jpg)'
        }}
        data-aos="fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-teko leading-tight">
              Nos Services De Première Classe
            </h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90">
              Découvrez notre gamme complète de services d'excellence : Gestion de Séjour, Projet Foncier, 
              Gestion de Projet, Bâtiment & Immobilier, Épargne & Finance, Ressources Humaines. 
              Chaque service est de qualité, d'innovation et de dévouement. Vos besoins sont notre priorité absolue.
            </p>
            <div className="mt-12" data-aos="zoom-in" data-aos-delay="400">
              <ArrowDown className="w-12 h-12 mx-auto text-orange-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
              Découvrez nos différentes rubriques, chacune dédiée à vous offrir une expertise exceptionnelle 
              dans la Gestion de Séjour, le Projet Foncier, la Gestion de Projet, le Bâtiment & Immobilier, 
              l'Épargne & Finance, et les Ressources Humaines. Bienvenue chez nous, où chaque service est une classe à part.
            </p>
            <div className="my-8" data-aos="fade-up" data-aos-delay="200">
              <ArrowDown className="w-10 h-10 mx-auto text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-12" data-aos="fade-up" data-aos-delay="400">
              Liste de nos différentes rubriques
            </h3>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-100 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4" data-aos="fade-down">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category.color} ${category.iconColor} hover:scale-105 hover:shadow-lg`}
              >
                {React.cloneElement(category.services[0].icon, { className: "w-4 h-4 mr-2" })}
                {category.title.split('Rubrique ')[1]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories avec images de fond */}
      <div className="space-y-0">
        {serviceCategories.map((category, index) => (
          <ServiceCategory 
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>

      {/* Additional Sections */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {additionalSections.map((section, index) => (
            <div 
              key={index}
              className={`mb-16 ${index % 2 === 0 ? '' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-teko">
                        {section.title}
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700 mb-4">
                      {section.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium">
                      <HeartPulse className="w-5 h-5 mr-2" />
                      <span>Engagement pour le développement durable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                <Users className="w-5 h-5 mr-2" />
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

export default Services;