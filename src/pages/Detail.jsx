import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Award,
  Calendar,
  Globe,
  Users,
  Target,
  BookOpen,
  Heart,
  Star,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronRight,
  Shield,
  Rocket,
  Lightbulb
} from 'lucide-react';

// Données des membres (à remplacer par votre API ou données réelles)
const membersData = [
  {
    id: 1,
    name: "John Doe",
    fonction: "CEO & Fondateur",
    image: "/images/me.jpg",
    description: "Expert en développement durable avec 15 ans d'expérience. Spécialiste en investissements internationaux et développement local.",
    email: "john.doe@drinsud.com",
    phone: "+237 699 37 7664",
    location: "Yaoundé, Cameroun",
    experience: "15 ans",
    expertise: ["Développement Durable", "Investissement", "Gestion de Projets"],
    bio: "Passionné par le développement économique et social, John a fondé DRINDSUD avec la vision de connecter la diaspora avec des opportunités d'investissement au Cameroun.",
    achievements: [
      "Plus de 100 projets réalisés",
      "Expert certifié en développement durable",
      "Prix de l'innovation 2022"
    ],
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    fonction: "Directrice Financière",
    image: "/images/menber.jpg",
    description: "Spécialiste en finance et investissement international avec 10 ans d'expérience.",
    email: "jane.smith@drinsud.com",
    phone: "+237 699 37 7665",
    location: "Douala, Cameroun",
    experience: "10 ans",
    expertise: ["Finance", "Investissement", "Gestion de Portefeuille"],
    bio: "Jane apporte son expertise financière pour optimiser les investissements et assurer la croissance durable de DRINDSUD.",
    achievements: [
      "Gestion de portefeuille de 50M+",
      "Certification CFA",
      "Meilleure directrice financière 2021"
    ]
  },
  {
    id: 3,
    name: "Robert Johnson",
    fonction: "Directeur des Opérations",
    image: "/images/menber1.jpg",
    description: "Expert en gestion de projets et ressources humaines avec 12 ans d'expérience.",
    email: "robert.johnson@drinsud.com",
    phone: "+237 699 37 7666",
    location: "Yaoundé, Cameroun",
    experience: "12 ans",
    expertise: ["Gestion de Projets", "Ressources Humaines", "Opérations"],
    bio: "Robert supervise toutes les opérations de DRINDSUD, assurant l'excellence opérationnelle et le développement de l'équipe.",
    achievements: [
      "Gestion de 200+ projets",
      "Certification PMP",
      "Leader opérationnel de l'année 2020"
    ]
  },
  {
    id: 4,
    name: "Maria Garcia",
    fonction: "Responsable Relations",
    image: "/images/te.jpg",
    description: "Spécialiste en relations diaspora et partenariats avec 8 ans d'expérience.",
    email: "maria.garcia@drinsud.com",
    phone: "+237 699 37 7667",
    location: "Paris, France",
    experience: "8 ans",
    expertise: ["Relations Internationales", "Partenariats", "Communication"],
    bio: "Maria connecte la diaspora camerounaise avec des opportunités d'investissement et de développement au Cameroun.",
    achievements: [
      "Établissement de 50+ partenariats",
      "Expert en relations internationales",
      "Prix de l'excellence en communication"
    ]
  }
];

const Detail = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simuler un chargement d'API
    const timer = setTimeout(() => {
      const foundMember = membersData.find(m => m.id === parseInt(id));
      setMember(foundMember);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          <p className="mt-4 text-gray-600 text-lg">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center" data-aos="fade-up">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Membre non trouvé</h2>
          <p className="text-gray-600 mb-8">Le membre que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link 
            to="/"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Profil de</span>
              <span className="font-semibold text-gray-800">{member.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-teko">
            Profil Polyvalent
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8" data-aos="fade-up">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
              {/* Profile Image */}
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.fonction}
                  </span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h1>
                <p className="text-gray-600 mb-6">{member.description}</p>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                    <span>Expérience: {member.experience}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Réseaux Sociaux</h3>
                  <div className="flex space-x-3">
                    {member.social?.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a 
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-100 hover:bg-sky-200 text-sky-600 p-2 rounded-lg transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social?.facebook && (
                      <a 
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-lg transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-lg transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/contact"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contacter {member.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:w-3/5">
            {/* Tabs Navigation */}
            <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {['overview', 'expertise', 'achievements', 'bio'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                      activeTab === tab
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {tab === 'overview' && 'Aperçu'}
                    {tab === 'expertise' && 'Expertise'}
                    {tab === 'achievements' && 'Réalisations'}
                    {tab === 'bio' && 'Biographie'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {activeTab === 'overview' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <User className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Aperçu du Profil</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                        <h4 className="font-semibold text-gray-800">Fonction</h4>
                      </div>
                      <p className="text-gray-700">{member.fonction}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Target className="w-5 h-5 text-green-500 mr-2" />
                        <h4 className="font-semibold text-gray-800">Spécialité</h4>
                      </div>
                      <p className="text-gray-700">{member.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Expertise Clé</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">À propos</h4>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Expertise & Compétences</h3>
                  </div>

                  <div className="space-y-6">
                    {member.expertise.map((skill, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                          <ChevronRight className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill}</h4>
                          <p className="text-gray-600">
                            Expertise approfondie dans ce domaine avec des années d'expérience pratique
                            et des résultats tangibles.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-6 h-6 text-blue-500 mr-3" />
                      <h4 className="text-xl font-semibold text-gray-800">Approche Innovante</h4>
                    </div>
                    <p className="text-gray-700">
                      {member.name} combine expertise technique et vision stratégique pour développer
                      des solutions innovantes qui répondent aux défis du développement durable.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Star className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Réalisations & Distinctions</h3>
                  </div>

                  <div className="space-y-6">
                    {member.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="bg-orange-100 p-2 rounded-full mr-4">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement}</h4>
                            <p className="text-gray-600">
                              Reconnaissance de l'excellence et du dévouement dans le domaine.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">{member.experience}</div>
                      <div className="text-sm">Années d'Expérience</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">{member.expertise.length}+</div>
                      <div className="text-sm">Domaines d'Expertise</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-sm">Projets Accomplis</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bio' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <BookOpen className="w-6 h-6 text-pink-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Biographie Complète</h3>
                  </div>

                  <div className="prose max-w-none">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Parcours Professionnel</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {member.bio} Avec {member.experience} d'expérience, {member.name.split(' ')[0]} 
                      a contribué significativement au développement de DRINDSUD et à la réalisation 
                      de nombreux projets réussis.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Philosophie Professionnelle</h4>
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl mb-6">
                      <div className="flex items-start">
                        <Heart className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 italic">
                          "Je crois fermement que le développement durable passe par l'innovation, 
                          la collaboration et l'engagement envers l'excellence. Chaque projet est 
                          une opportunité de créer un impact positif et durable."
                        </p>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Éducation & Formation</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Master en Développement Durable</h5>
                          <p className="text-gray-600">Université de Yaoundé I</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Certification PMP</h5>
                          <p className="text-gray-600">Project Management Institute</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Back to Team Button */}
            <div className="mt-8 text-center" data-aos="fade-up">
              <Link 
                to="/#team"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Voir toute l'équipe
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Members */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12" data-aos="fade-down">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 font-teko">Autres Membres de l'Équipe</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membersData
            .filter(m => m.id !== member.id)
            .slice(0, 4)
            .map((relatedMember) => (
              <Link
                key={relatedMember.id}
                to={`/detail/${relatedMember.id}`}
                className="group"
                data-aos="fade-up"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedMember.image} 
                      alt={relatedMember.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{relatedMember.name}</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">{relatedMember.fonction}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedMember.description}</p>
                    <div className="mt-4 flex items-center text-orange-500 text-sm">
                      <span>Voir le profil</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;