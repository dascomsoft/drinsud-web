import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronRight } from 'lucide-react';

const teamMembers = [
  { 
    id: 1,
    image: "/images/menber.jpg",
    name: "Wambo Jean Ernest",
    fonction: "Diplomate indépendant",
    description: "Diplômé de l'Institut des Relations Internationales du Cameroun. Spécialiste en ingénierie de la coopération internationale."
  },
  {
    id: 2,
    image: "/images/menber1.jpg",
    name: "Mecu Tchame Simba",
    fonction: "Architecte",
    description: "Architecte passionné avec une expertise en design innovant et durable. Fortes compétences en conception architecturale."
  },
  {
    id: 3,
    image: "/images/me.jpg",
    name: "Dassi Dieudonne",
    fonction: "Informaticien (Développeur Front-end)",
    description: "Développeur passionné avec une expertise technique exceptionnelle. Expérience dans le développement logiciel."
  },
  {
    id: 4,
    image: "/images/ntet.jpg",
    name: "Fongwouet Ntet Pierre",
    fonction: "Informaticien (Correspondant base en Allemagne)",
    description: "Informaticien passionné avec expertise en Back-end/Front-end, JSP-JAVA et MS Office."
  }
];

const TeamSection = () => {
  const [members, setMembers] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    setMembers(teamMembers);
    
    // Détecter si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Déterminer quels membres afficher
  const getDisplayedMembers = () => {
    // Sur mobile, afficher seulement 2 membres sauf si "Voir plus" cliqué
    if (isMobile && !showAllMobile) {
      return members.slice(0, 2);
    }
    // Sur desktop/tablette ou mobile avec "Voir plus", afficher tous
    return members;
  };

  const displayedMembers = getDisplayedMembers();

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-down">
          <span className="text-orange-500 font-semibold text-sm sm:text-base mb-2 block flex items-center justify-center">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Membres de l'Équipe
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 font-teko">
            Notre Équipe d'Experts
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Rencontrez notre équipe de professionnels passionnés et dévoués à l'excellence.
          </p>
        </div>

        {members.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {displayedMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 100, 300)}
                >
                  <Link to={`/detail/${member.id}`} className="block">
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <div class="text-center p-4">
                                  <div class="text-4xl mb-2">👤</div>
                                  <div class="text-gray-700 font-medium text-sm">${member.name}</div>
                                </div>
                              </div>
                            `;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Info */}
                      <div className="p-4 sm:p-6">
                        <div className="text-center mb-3 sm:mb-4">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors line-clamp-1">
                            {member.name}
                          </h3>
                          <p className="text-orange-600 font-medium text-sm sm:text-base mb-2">{member.fonction}</p>
                          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{member.description}</p>
                        </div>

                        {/* Voir le profil button */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-center text-orange-500 font-medium text-xs sm:text-sm group-hover:text-orange-600 transition-colors">
                            <span>Voir le profil</span>
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bouton Voir plus/moins seulement sur mobile */}
            {isMobile && members.length > 2 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllMobile(!showAllMobile)}
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
                >
                  {showAllMobile ? (
                    <>
                      <span>Voir moins</span>
                      <ChevronRight className="w-5 h-5 ml-2 transform rotate-90" />
                    </>
                  ) : (
                    <>
                      <span>Voir {members.length - 2} autres membres</span>
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">Chargement de l'équipe...</p>
          </div>
        )}

        {/* CTA Voir toute l'équipe (toujours visible) */}
        <div className="text-center mt-8 md:mt-12" data-aos="fade-up">
          <Link 
            to="/equipe"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Découvrir toute notre équipe
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
          
          <p className="mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Chaque membre de notre équipe apporte une expertise unique pour garantir le succès de vos projets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
