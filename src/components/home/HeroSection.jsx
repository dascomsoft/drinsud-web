// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <section 
//       className="relative bg-cover bg-center bg-fixed py-24 md:py-32 lg:py-40"
//       style={{
//         backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/ino2.jpg)'
//       }}
//       data-aos="fade-in"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center text-white" data-aos="fade-up" data-aos-delay="200">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-teko leading-tight">
//             Diaspora Roots Investment for <br className="hidden md:block" />
//             Sustainable Development (DRINSUD)
//           </h1>
//           <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
//             DRINSUD est une entreprise de facilitation de service et d'expertise locale dédiée 
//             à la diaspora camerounaise dispersée à travers le monde. Avec l'aide de nos partenaires 
//             dans divers domaines, nous vous offrons des prestations adaptées à vos besoins.
//           </p>
//           <Link 
//             to="/presentation" 
//             className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           >
//             En savoir plus
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





































import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center min-h-[80vh] md:min-h-[90vh] flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/ino2.jpg)',
        backgroundAttachment: 'scroll' // Mobile fix: remove fixed background
      }}
      data-aos="fade-in"
    >
      <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-teko leading-snug sm:leading-tight">
            Diaspora Roots Investment for Sustainable Development (DRINSUD)
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed px-2 sm:px-0">
            DRINSUD est une entreprise de facilitation de service et d'expertise locale dédiée 
            à la diaspora camerounaise dispersée à travers le monde. Avec l'aide de nos partenaires 
            dans divers domaines, nous vous offrons des prestations adaptées à vos besoins.
          </p>
          <Link 
            to="/presentation" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;