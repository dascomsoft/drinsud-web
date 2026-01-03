// import React from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     id: 'event',
//     title: 'Évènementiel',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
//         <path d="M2,9H9V2H2Zm9-7V9h7V2ZM2,18H9V11H2Zm9,0h7V11H11Z"/>
//       </svg>
//     ),
//     color: 'bg-blue-100'
//   },
//   {
//     id: 'foncier',
//     title: 'Projet foncier',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 512 512" fill="currentColor">
//         <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z"/>
//       </svg>
//     ),
//     color: 'bg-green-100'
//   },
//   {
//     id: 'bati',
//     title: 'Immobilier & Bâtiment',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M10,7H3A1,1,0,0,0,2,8V22h9V8A1,1,0,0,0,10,7ZM6,20H4V18H6Zm0-3H4V15H6Zm0-3H4V12H6Zm0-3H4V9H6Zm3,9H7V18H9Zm0-3H7V15H9Zm0-3H7V12H9Zm0-3H7V9H9ZM21.406,5.736,13,2V22h9V6.65A1,1,0,0,0,21.406,5.736Z"/>
//       </svg>
//     ),
//     color: 'bg-purple-100'
//   },
//   {
//     id: 'finance',
//     title: 'Épargne & Finance',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 50 50" fill="currentColor">
//         <path d="M34.682 25.801c-1.438-1.134-3.596-2.04-6.474-2.717l-2.208-.521v-9.43l.299.122c1.874.949 2.881 2.745 3.019 4.745h7.516c-.137-4-1.615-6.958-4.434-9.048-1.873-1.389-4.009-2.282-6.4-2.732v-5.22h-7v5.06c-3.237.4-5.804 1.442-7.689 3.136-2.468 2.218-3.701 5.002-3.701 8.354 0 3.673 1.261 6.373 3.783 8.1 1.412.979 3.957 1.888 7.607 2.73v10.216c-1.331-.367-2.374-.971-3.109-1.844-.709-.848-1.184-1.752-1.426-3.752h-7.465c0 4 1.411 6.87 4.234 9.096 2.038 1.606 4.632 2.582 7.766 3.005v3.899h7v-3.833c3.333-.399 6.024-1.463 8.062-3.204 2.643-2.26 3.965-5.1 3.965-8.519 0-3.335-1.115-5.882-3.345-7.643z"/>
//       </svg>
//     ),
//     color: 'bg-yellow-100'
//   },
//   {
//     id: 'humaine',
//     title: 'Ressources Humaines',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 50 50" fill="currentColor">
//         <path d="M6 47.5c0 1.233.768 2 2 2 1.235 0 2-.767 2-2v-18.5h2v18.5c0 1.231.767 2 2 2s2-.767 2-2v-31.5h1v11.314c0 2.395 3.006 2.395 3 0v-12.153c0-2.646-1.906-4.161-5-4.161h-8c-2.82 0-5 1.219-5 4.087v12.913c0 2 3 2 3 0v-12h1v31.5z"/>
//       </svg>
//     ),
//     color: 'bg-pink-100'
//   },
//   {
//     id: 'invest',
//     title: 'Investissement',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 14 14" fill="currentColor">
//         <path d="M8.4,9.6H3.6A2.41,2.41,0,0,0,1.2,12h9.6A2.41,2.41,0,0,0,8.4,9.6Zm1.8-4.2a4,4,0,0,0-.15-1L12,2.46,6,0,0,2.45H0l1.94,1.9A4.58,4.58,0,0,0,1.8,5.4a4.2,4.2,0,0,0,8.4,0ZM6,2.4a.6.6,0,1,1-.6.6A.6.6,0,0,1,6,2.4ZM6,7.92A2.52,2.52,0,0,1,3.48,5.4a2.35,2.35,0,0,1,.08-.6H8.44a2.89,2.89,0,0,1,.08.6A2.52,2.52,0,0,1,6,7.92Z"/>
//       </svg>
//     ),
//     color: 'bg-indigo-100'
//   },
//   {
//     id: 'gestion',
//     title: 'Gestion de projets',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 14 14" fill="currentColor">
//         <path d="M11,1H7V5h4ZM1,11H5V7H1ZM1,5H5V1H1ZM6.3,7l3.85,6L14,7Z"/>
//       </svg>
//     ),
//     color: 'bg-red-100'
//   },
//   {
//     id: 'sejour',
//     title: 'Gestion de séjour',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 36 36" fill="currentColor">
//         <path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a17.91,17.91,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.38-.3A1,1,0,0,0,30,32.5V25.77a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM29.84,18H21.51a.42.42,0,0,0-.3.13l-5.3,5.64a.39.39,0,0,1-.29.13H13.19a.41.41,0,0,1-.37-.58l2.47-5.32H7.46a.42.42,0,0,1-.36-.22l-2.7-5H6.24a.53.53,0,0,1,.39.18l1.56,1.69a.38.38,0,0,0,.33.14l6.18-.38-2-3.55h2.89a.47.47,0,0,1,.31.11L19.63,14l6.69-.35a2.44,2.44,0,0,1,1.81.63l2.47,2.23A.92.92,0,0,1,29.84,18Z"/>
//       </svg>
//     ),
//     color: 'bg-teal-100'
//   },
//   {
//     id: 'locale',
//     title: 'Expertise locale',
//     icon: (
//       <svg className="w-10 h-10" viewBox="0 0 96 96" fill="currentColor">
//         <path d="M93.3047.9934A6.0613,6.0613,0,0,0,87.6328.4777l-25.63,10.9856L36.3633.4777c.04.022.0139.1641.0447.2044A5.951,5.951,0,0,0,31.6289.4777l-27.9961,12A6.01,6.01,0,0,0,0,17.9973v72a6.0087,6.0087,0,0,0,6,6,6.1926,6.1926,0,0,0,2.3672-.48l25.63-10.9856,25.64,10.9856a6.1926,6.1926,0,0,0,2.3672.48,5.9893,5.9893,0,0,0,2.3408-.7053c.0052.0476.0264.2248.0264.2248l27.9961-12A6.01,6.01,0,0,0,96,77.9973v-72A5.9705,5.9705,0,0,0,93.3047.9934ZM12,21.9582l15.9961-6.8555V74.0363L12,80.8918ZM39.9961,15.091l16.0078,6.8672V80.9035L39.9961,74.0363ZM84,74.0363,68.0039,80.8918V21.9582L84,15.1027Z"/>
//       </svg>
//     ),
//     color: 'bg-cyan-100'
//   }
// ];

// const ServicesSection = () => {
//   return (
//     <section 
//       className="py-16 md:py-24 bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/invest2.jpg)'
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <h1 
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 font-teko"
//           data-aos="fade-down"
//         >
//           Nos Services
//         </h1>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div 
//               key={service.id}
//               className="group"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <Link 
//                 to={`/services#${service.id}`}
//                 className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className={`${service.color} p-3 rounded-lg text-orange-500`}>
//                     {service.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
//                       {service.title}
//                     </h3>
//                     <span className="inline-flex items-center text-orange-300 font-medium hover:text-orange-200 transition-colors">
//                       En savoir plus
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;






































import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'event',
    title: 'Évènementiel',
    icon: '🎯',
    color: 'bg-blue-100'
  },
  {
    id: 'foncier',
    title: 'Projet foncier',
    icon: '🏞️',
    color: 'bg-green-100'
  },
  {
    id: 'bati',
    title: 'Immobilier & Bâtiment',
    icon: '🏗️',
    color: 'bg-purple-100'
  },
  {
    id: 'finance',
    title: 'Épargne & Finance',
    icon: '💰',
    color: 'bg-yellow-100'
  },
  {
    id: 'humaine',
    title: 'Ressources Humaines',
    icon: '👥',
    color: 'bg-pink-100'
  },
  {
    id: 'invest',
    title: 'Investissement',
    icon: '📈',
    color: 'bg-indigo-100'
  },
  {
    id: 'gestion',
    title: 'Gestion de projets',
    icon: '📋',
    color: 'bg-red-100'
  },
  {
    id: 'sejour',
    title: 'Gestion de séjour',
    icon: '🏨',
    color: 'bg-teal-100'
  },
  {
    id: 'locale',
    title: 'Expertise locale',
    icon: '📍',
    color: 'bg-cyan-100'
  }
];

const ServicesSection = () => {
  return (
    <section 
      className="py-12 md:py-20 lg:py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/invest2.jpg)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-12 font-teko"
          data-aos="fade-down"
        >
          Nos Services
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 50, 300)}
            >
              <Link 
                to={`/services#${service.id}`}
                className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`${service.color} p-2 sm:p-3 rounded-lg text-gray-800 text-lg sm:text-xl flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-orange-300 transition-colors truncate">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center text-orange-300 text-sm sm:text-base font-medium hover:text-orange-200 transition-colors">
                      En savoir plus
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Bouton Voir tous les services */}
        <div className="text-center mt-8 md:mt-12" data-aos="fade-up">
          <Link 
            to="/services"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Voir tous nos services
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;