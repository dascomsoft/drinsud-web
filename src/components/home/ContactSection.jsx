// import React from 'react';
// import { Link } from 'react-router-dom';

// const ContactSection = () => {
//   return (
//     <section 
//       className="relative py-16 md:py-24 bg-cover bg-center bg-fixed overflow-hidden"
//       style={{
//         backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/invest7.jpg)'
//       }}
//       data-aos="fade-in"
//     >
//       {/* Éléments décoratifs */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
//       <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-full opacity-10 translate-x-24 translate-y-24"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <div data-aos="fade-up">
//             <span className="text-orange-400 font-semibold text-lg mb-2 block">
//               Envie de travailler avec nous ?
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-teko leading-tight">
//               Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
//             </h2>
//           </div>

//           <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
//             <p className="text-lg text-gray-200 leading-relaxed">
//               Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? 
//               Chez nous, chaque membre est un pilier essentiel de notre succès. Découvrez des défis 
//               inspirants, une culture collaborative et des opportunités de croissance. Ensemble, 
//               bâtissons l'avenir et donnez vie à vos ambitions.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
//             <Link 
//               to="/contact"
//               className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               Contactez-nous
//             </Link>
            
//             <Link 
//               to="/recrutement"
//               className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//               </svg>
//               Postuler maintenant
//             </Link>
//           </div>

//           {/* Statistiques */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12" data-aos="fade-up" data-aos-delay="600">
//             {[
//               { value: '50+', label: 'Projets Réalisés' },
//               { value: '200+', label: 'Clients Satisfaits' },
//               { value: '15+', label: 'Pays Desservis' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
//                 <div className="text-gray-300">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


























































import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section 
      className="relative py-12 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/invest7.jpg)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-aos="fade-in"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div data-aos="fade-up">
            <span className="text-orange-400 font-semibold text-sm sm:text-base md:text-lg mb-2 block">
              Envie de travailler avec nous ?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-teko leading-snug">
              Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
            </h2>
          </div>

          <div className="mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg px-2 sm:px-0">
              Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? 
              Chez nous, chaque membre est un pilier essentiel de notre succès.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactez-nous
            </Link>
            
            <Link 
              to="/recrutement"
              className="inline-flex items-center justify-center bg-transparent border border-white hover:bg-white/10 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Postuler maintenant
            </Link>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="600">
            {[
              { value: '50+', label: 'Projets' },
              { value: '200+', label: 'Clients' },
              { value: '15+', label: 'Pays' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;