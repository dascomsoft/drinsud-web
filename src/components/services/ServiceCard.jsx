// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const ServiceCard = ({ 
//   service, 
//   categoryId,
//   index,
//   iconColor = 'text-orange-500',
//   bgColor = 'bg-white'
// }) => {
//   const {
//     id,
//     name,
//     description,
//     icon,
//     image,
//     shortDescription,
//     isPopular = false,
//     features = []
//   } = service;

//   // Créer un slug pour le service
//   const serviceSlug = name.toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)/g, '');

//   return (
//     <div 
//       className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${bgColor}`}
//       data-aos="fade-up"
//       data-aos-delay={index * 50}
//     >
//       {/* Badge pour services populaires */}
//       {isPopular && (
//         <div className="absolute top-4 right-4 z-10">
//           <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
//             Populaire
//           </span>
//         </div>
//       )}

//       {/* Image du service */}
//       <div className="relative h-48 overflow-hidden">
//         {image ? (
//           <img 
//             src={image} 
//             alt={name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             loading="lazy"
//           />
//         ) : (
//           <div className={`w-full h-full ${iconColor.replace('text', 'bg')}/10 flex items-center justify-center`}>
//             <div className={`p-4 rounded-full ${iconColor} bg-white/20 backdrop-blur-sm`}>
//               {React.cloneElement(icon, { size: 48 })}
//             </div>
//           </div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//       </div>

//       {/* Contenu de la carte */}
//       <div className="p-6">
//         {/* En-tête avec icône */}
//         <div className="flex items-center mb-4">
//           <div className={`p-3 rounded-lg ${iconColor} bg-opacity-10 mr-4`}>
//             {icon && React.cloneElement(icon, { size: 24 })}
//           </div>
//           <h3 className="text-xl font-bold text-gray-800 font-teko flex-grow">
//             {name}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 mb-4 leading-relaxed">
//           {shortDescription || description?.substring(0, 120) || `Service ${name} de qualité professionnelle`}
//           {(shortDescription || description?.length > 120) && '...'}
//         </p>

//         {/* Features list (si disponible) */}
//         {features.length > 0 && (
//           <ul className="mb-4 space-y-2">
//             {features.slice(0, 3).map((feature, idx) => (
//               <li key={idx} className="flex items-center text-sm text-gray-700">
//                 <div className={`w-2 h-2 rounded-full ${iconColor} mr-3`}></div>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Bouton d'action */}
//         <div className="mt-6 pt-4 border-t border-gray-200">
//           <Link 
//             to={`/services/${categoryId}/${serviceSlug}`}
//             state={{ service, categoryId }}
//             className="inline-flex items-center justify-between w-full group"
//           >
//             <span className={`font-medium ${iconColor} hover:underline`}>
//               Voir les détails
//             </span>
//             <ArrowRight className={`w-5 h-5 ${iconColor} transform group-hover:translate-x-2 transition-transform duration-300`} />
//           </Link>
//         </div>
//       </div>

//       {/* Overlay au survol */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500"></div>
//     </div>
//   );
// };

// // Composant pour la grille de services
// export const ServiceGrid = ({ services, categoryId, columns = 3, iconColor = 'text-orange-500' }) => {
//   return (
//     <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
//       {services.map((service, index) => (
//         <ServiceCard
//           key={index}
//           service={service}
//           categoryId={categoryId}
//           index={index}
//           iconColor={iconColor}
//           bgColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
//         />
//       ))}
//     </div>
//   );
// };

// export default ServiceCard;






















































import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  service, 
  categoryId,
  index,
  iconColor = 'text-orange-500',
  bgColor = 'bg-white'
}) => {
  const {
    name,
    icon,
    shortDescription = `Service ${name} professionnel de haute qualité`
  } = service;

  // Créer un slug pour le service
  const serviceSlug = name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${bgColor}`}
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Contenu de la carte */}
      <div className="p-6">
        {/* En-tête avec icône */}
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${iconColor} bg-opacity-10 mr-4`}>
            {/* Sécurité : vérifier que icon est bien un élément React */}
            {React.isValidElement(icon) ? React.cloneElement(icon, { 
              className: `w-6 h-6 ${iconColor}`
            }) : <span className={`w-6 h-6 ${iconColor}`}>●</span>}
          </div>
          <h3 className="text-xl font-bold text-gray-800 font-teko flex-grow">
            {name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {shortDescription}
        </p>

        {/* Bouton d'action */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link 
            to={`/services/${categoryId}/${serviceSlug}`}
            state={{ 
              service: { ...service, categoryId },
              categoryId 
            }}
            className="inline-flex items-center justify-between w-full group/link"
          >
            <span className={`font-medium ${iconColor} hover:underline`}>
              Voir les détails
            </span>
            <ArrowRight className={`w-5 h-5 ${iconColor} transform group-hover/link:translate-x-2 transition-transform duration-300`} />
          </Link>
        </div>
      </div>

      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500"></div>
    </div>
  );
};

// Composant pour la grille de services
export const ServiceGrid = ({ services, categoryId, columns = 3, iconColor = 'text-orange-500' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          categoryId={categoryId}
          index={index}
          iconColor={iconColor}
          bgColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        />
      ))}
    </div>
  );
};

export default ServiceCard;