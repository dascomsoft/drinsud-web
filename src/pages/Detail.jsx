import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Briefcase,
  Mail,
  MapPin,
  Award,
  Users,
  Target,
  BookOpen,
  Heart,
  ChevronRight,
  Shield,
  Rocket,
  Lightbulb,
  Globe,
  Cpu,
  Building,
  Code,
  Database
} from 'lucide-react';

// Données des membres (vos données exactes)
const membersData = [
  { 
    id: 1,
    image: "/images/menber.jpg",
    name: "Wambo Jean Ernest",
    fonction: "Diplomate indépendant",
    description: "Mr.Wambo Jean Ernest est un diplomate indépendant diplômé de l'Institut des Relations Internationales du Cameroun. Spécialiste en ingénierie de la coopération internationale et décentralisée, co-développement et développement durable. Il est également doctorant dans le même institut, entrepreneur agricole et militant au sein de plusieurs associations au Cameroun."
  },
  {
    id: 2,
    image: "/images/menber1.jpg",
    name: "Mecu Tchame Simba",
    fonction: "Architecte",
    description: "Mr.Tchame est Architecte passionné, avec une expertise en design innovant et durable. Fortes compétences en conception architecturale, gestion de projets et communication efficace. Expérience démontrée dans la création de solutions créatives et fonctionnelles pour répondre aux besoins des clients. Toujours motivé par le désir de repousser les limites du design afin de créer des espaces inspirants et durables."
  },
  {
    id: 3,
    image: "/images/me.jpg",
    name: "Dassi Dieudonne",
    fonction: "Informaticien (Développeur Front-end)",
    description: "Mr.Dassi est un développeur passionné, doté d'une expertise technique exceptionnelle et d'une créativité débordante. Avec une solide expérience dans le domaine du développement logiciel, il excelle dans la création de solutions innovantes et efficaces. Toujours à l'affût des dernières technologies et des meilleures pratiques de codage, Mr.Dassi est un atout précieux pour tout projet de développement. Son engagement envers l'excellence et sa capacité à relever les défis font de lui un collaborateur de choix pour transformer les idées en réalité numérique."
  },
  {
    id: 4,
    image: "/images/ntet.jpg",
    name: "Fongwouet Ntet Pierre",
    fonction: "Informaticien (Correspondant base en Allemagne)",
    description: "Mr.Fongwouet est un informaticien passionné, doté d'une expertise en Back-end/Front-end, JSP-JAVA et MS Office. Avec une solide expérience en tant que Data Analyst avec Ms Power Bi et Comptabilité analytique. Toujours à l'affût des dernières technologies et des meilleures pratiques de codage. Mr.Fongwouet est un correspondant et un atout précieux pour tout projet de développement. Sa capacité à relever les défis font de lui un collaborateur de choix pour transformer notre secteur numérique."
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

  // Fonction pour déterminer les expertises basées sur la fonction
  const getExpertiseByRole = (role) => {
    const expertiseMap = {
      1: ["Coopération Internationale", "Développement Durable", "Diplomatie", "Entrepreneuriat Agricole"],
      2: ["Conception Architecturale", "Design Innovant", "Gestion de Projets", "Communication"],
      3: ["Développement Front-end", "Technologies Web", "Innovation Numérique", "Solutions Créatives"],
      4: ["Back-end/Front-end", "JSP-JAVA", "Data Analysis", "MS Office", "Comptabilité Analytique"]
    };
    return expertiseMap[id] || ["Expertise Professionnelle", "Compétences Techniques"];
  };

  // Fonction pour déterminer les réalisations basées sur la fonction
  const getAchievementsByRole = (role) => {
    const achievementsMap = {
      1: [
        "Diplômé de l'Institut des Relations Internationales du Cameroun",
        "Doctorant en Relations Internationales",
        "Entrepreneur agricole accompli",
        "Militant actif dans plusieurs associations"
      ],
      2: [
        "Expert en design innovant et durable",
        "Compétences avérées en conception architecturale",
        "Gestion efficace de projets complexes",
        "Création de solutions fonctionnelles et esthétiques"
      ],
      3: [
        "Expertise technique exceptionnelle en développement",
        "Créativité débordante dans les solutions numériques",
        "Maîtrise des dernières technologies web",
        "Transformation d'idées en réalité numérique"
      ],
      4: [
        "Expertise en Back-end/Front-end",
        "Compétences en JSP-JAVA",
        "Expérience en Data Analysis avec Power BI",
        "Connaissances en comptabilité analytique"
      ]
    };
    return achievementsMap[id] || ["Expert reconnu dans son domaine", "Contributions significatives"];
  };

  // Fonction pour obtenir la localisation
  const getLocationByRole = (role) => {
    const locationMap = {
      1: "Cameroun",
      2: "Cameroun",
      3: "Cameroun",
      4: "Allemagne (Correspondant)"
    };
    return locationMap[id] || "Cameroun";
  };

  // Fonction pour obtenir l'icône selon le rôle
  const getRoleIcon = (roleId) => {
    const iconMap = {
      1: Globe,
      2: Building,
      3: Code,
      4: Cpu
    };
    return iconMap[roleId] || User;
  };

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

  const expertise = getExpertiseByRole(member.id);
  const achievements = getAchievementsByRole(member.id);
  const location = getLocationByRole(member.id);
  const RoleIcon = getRoleIcon(member.id);

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
            Profil Professionnel
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
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <RoleIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h1>
                    <p className="text-gray-600">{member.fonction}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.description}</p>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="w-5 h-5 mr-3 text-orange-500" />
                    <span>{member.fonction}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                    <span>Localisation: {location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="w-5 h-5 mr-3 text-orange-500" />
                    <span>Expertise: {expertise.length} domaines</span>
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
                {['overview', 'expertise', 'achievements'].map((tab) => (
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
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {activeTab === 'overview' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <User className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Aperçu du Profil</h3>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Présentation</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl mb-6">
                      <div className="flex items-start">
                        <Heart className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 italic">
                          "Passionné par mon domaine d'expertise, je m'engage à apporter des solutions innovantes
                          et efficaces qui créent une valeur durable pour nos clients et partenaires."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Domaines de Compétence</h4>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
                    {expertise.map((skill, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                          <ChevronRight className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill}</h4>
                          <p className="text-gray-600">
                            Maîtrise approfondie de ce domaine avec une approche innovante et des résultats concrets.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-6 h-6 text-blue-500 mr-3" />
                      <h4 className="text-xl font-semibold text-gray-800">Approche Professionnelle</h4>
                    </div>
                    <p className="text-gray-700">
                      {member.name} combine expertise technique, créativité et rigueur pour développer
                      des solutions adaptées aux besoins spécifiques de chaque projet.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div data-aos="fade-up">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Shield className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Formation & Réalisations</h3>
                  </div>

                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
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
                              Cette réalisation démontre l'expertise et le dévouement de {member.name.split(' ')[0]} dans son domaine.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">{expertise.length}</div>
                      <div className="text-sm">Domaines d'Expertise</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">{achievements.length}</div>
                      <div className="text-sm">Réalisations</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-sm">Engagement</div>
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