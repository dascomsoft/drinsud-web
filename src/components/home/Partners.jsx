// import React from 'react';

// const partners = [
//   { id: 1, logo: '/images/client-1.png', name: 'Partner 1' },
//   { id: 2, logo: '/images/client-2.png', name: 'Partner 2' },
//   { id: 3, logo: '/images/client-3.png', name: 'Partner 3' },
//   { id: 4, logo: '/images/client-4.png', name: 'Partner 4' },
//   { id: 5, logo: '/images/client-5.png', name: 'Partner 5' },
//   { id: 6, logo: '/images/client-6.png', name: 'Partner 6' },
//   { id: 7, logo: '/images/client-7.png', name: 'Partner 7' },
//   { id: 8, logo: '/images/client-8.png', name: 'Partner 8' }
// ];

// const Partners = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12" data-aos="fade-down">
//           <span className="text-orange-500 font-semibold text-lg mb-2 block">
//             Fait Confiance par plus de 200+
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-teko">
//             Nos partenaires
//           </h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Nous collaborons avec les meilleures entreprises pour vous offrir des services d'exception.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
//           {partners.map((partner, index) => (
//             <div 
//               key={partner.id}
//               className="group"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-orange-200">
//                 <div className="relative h-24 flex items-center justify-center">
//                   <img 
//                     src={partner.logo} 
//                     alt={partner.name}
//                     className="max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//                 <div className="text-center mt-4">
//                   <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">
//                     {partner.name}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Devenir partenaire */}
//         <div className="text-center mt-16" data-aos="fade-up">
//           <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-full shadow-lg">
//             <h3 className="text-xl font-semibold mb-2">Devenir Partenaire ?</h3>
//             <p className="mb-4">Rejoignez notre réseau de partenaires prestigieux</p>
//             <a 
//               href="/entreprise#devenir-partenaire"
//               className="inline-flex items-center bg-white text-orange-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300"
//             >
//               En savoir plus
//               <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;






















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const partners = [
  { id: 1, logo: '/images/client-1.png', name: 'Partner 1' },
  { id: 2, logo: '/images/client-2.png', name: 'Partner 2' },
  { id: 3, logo: '/images/client-3.png', name: 'Partner 3' },
  { id: 4, logo: '/images/client-4.png', name: 'Partner 4' },
  { id: 5, logo: '/images/client-5.png', name: 'Partner 5' },
  { id: 6, logo: '/images/client-6.png', name: 'Partner 6' },
  { id: 7, logo: '/images/client-7.png', name: 'Partner 7' },
  { id: 8, logo: '/images/client-8.png', name: 'Partner 8' }
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto-rotation du carousel sur mobile
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % Math.ceil(partners.length / 2));
      }, 4000);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (interval) clearInterval(interval);
    };
  }, [isMobile]);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-down">
          <span className="text-orange-500 font-semibold text-sm sm:text-base md:text-lg mb-2 block">
            Fait Confiance par plus de 200+
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 font-teko">
            Nos partenaires
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Nous collaborons avec les meilleures entreprises pour vous offrir des services d'exception.
          </p>
        </div>

        {/* Version Desktop/Tablette (grille) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-aos="fade-up">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className="group"
              data-aos-delay={Math.min(index * 50, 300)}
            >
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-95 border border-gray-100 hover:border-orange-200 h-full">
                <div className="relative h-20 md:h-24 flex items-center justify-center">
                  {/* Image avec fallback */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-16 md:max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <span class="text-gray-700 font-bold text-lg">${partner.name.charAt(0)}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                <div className="text-center mt-3 md:mt-4">
                  <span className="text-gray-600 text-xs md:text-sm font-medium group-hover:text-gray-800 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Version Mobile (carousel amélioré) */}
        <div className="md:hidden" data-aos="fade-up">
          <div className="relative overflow-hidden px-1">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 2)}%)`,
                width: `${Math.ceil(partners.length / 2) * 100}%`
              }}
            >
              {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, groupIndex) => (
                <div key={groupIndex} className="w-1/2 px-2 flex-shrink-0">
                  <div className="grid grid-cols-2 gap-3">
                    {partners.slice(groupIndex * 2, groupIndex * 2 + 2).map((partner) => (
                      <div key={partner.id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 h-full">
                        <div className="relative h-14 flex items-center justify-center mb-2">
                          <div className="w-full h-full flex items-center justify-center">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="max-h-12 w-auto object-contain"
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `
                                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <span class="text-gray-700 font-bold">${partner.name.charAt(0)}</span>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <span className="text-gray-600 text-xs font-medium truncate block">
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation améliorée */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === 0 ? Math.ceil(partners.length / 2) - 1 : prev - 1
              )}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors active:scale-95"
              aria-label="Previous partners"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicateurs de pagination */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${index === currentIndex 
                    ? 'w-8 h-1.5 bg-orange-500 rounded-full' 
                    : 'w-1.5 h-1.5 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to partner group ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentIndex(prev => 
                (prev + 1) % Math.ceil(partners.length / 2)
              )}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors active:scale-95"
              aria-label="Next partners"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Devenir partenaire - Optimisé mobile */}
        <div className="text-center mt-10 md:mt-16" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 md:py-5 md:px-10 rounded-2xl md:rounded-3xl shadow-lg max-w-md w-full md:w-auto">
            <h3 className="text-lg md:text-xl font-bold mb-2">Devenir Partenaire ?</h3>
            <p className="text-sm md:text-base mb-4 opacity-90">Rejoignez notre réseau de partenaires prestigieux</p>
            <Link 
              to="/entreprise#devenir-partenaire"
              className="inline-flex items-center justify-center bg-white text-orange-600 hover:bg-gray-50 font-semibold py-2.5 px-6 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md w-full md:w-auto"
            >
              <span>En savoir plus</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          {/* Statistiques supplémentaires */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
            {[
              { value: '15+', label: 'Années' },
              { value: '50+', label: 'Projets' },
              { value: '30+', label: 'Partenaires' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;