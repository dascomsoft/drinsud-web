// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Target,
//   Globe,
//   Building,
//   Users,
//   TrendingUp,
//   Briefcase,
//   Mail,
//   MapPin,
//   Phone,
//   ArrowRight,
//   CheckCircle,
//   Lightbulb,
//   HeartHandshake,
//   Rocket
// } from 'lucide-react';

// const Presentation = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const missions = [
//     "Concrétiser les projets de la diaspora dans le pays et offrir des prestations diverses afin d'encourager son investissement ;",
//     "Améliorer la compréhension du rapport migration et développement et promouvoir sa prise en compte dans les politiques de développement au Cameroun dans le cadre d'études et activités spécifiques ;",
//     "Accompagner le gouvernement et les CTD dans la conception et la mise en œuvre des stratégies de mobilisation de la diaspora ;",
//     "Contribuer à la lutte contre l'immigration clandestine à travers l'entrepreneuriat, l'investissement et le placement international de la main d'œuvre locale ;",
//     "Promouvoir la migration circulaire et le transfert de savoirs entre la diaspora et les organisations locales ;",
//     "Promouvoir le management de projet dans les petites et moyennes entreprises à travers le coaching et les formations à la carte."
//   ];

//   const actions = [
//     "Montage et gestion de Projet de codéveloppement et de coopération décentralisée ;",
//     "Dans la mise en place de l'action internationale des CTD (stratégie de codéveloppement, stratégie de coopération décentralisée, stratégie de marketing territorial, Agenda 21 local) ;",
//     "Montage, gestion et réalisation des projets investissements de la diaspora (projet immobilier, projet d'investissement, projet foncier, projets sociaux, projet évènementiel) ;",
//     "Prestation de service divers à la diaspora (gestion du séjour au pays, conseil, facilitations, gestion de l'épargne, suivi, courses, tourisme et gestion de projets spécifiques) ;",
//     "Recherche de financement pour les projets de développement durable ;",
//     "Réalisation d'études spécifiques et Production des données statistiques sur le codéveloppement, le développement local, les migrations internationales et l'action internationale des CTD au Cameroun ;",
//     "Entrepreneuriat jeunes et investissement divers."
//   ];

//   return (
//     <div className="presentation-page">
//       {/* Hero Section */}
//       <section 
//         className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/finance.jpg)'
//         }}
//         data-aos="fade-in"
//       >
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-teko leading-tight">
//               QUI SOMMES-NOUS?
//             </h1>
//             <div className="w-32 h-1 bg-orange-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
//             <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90">
//               DRINDSUD est un cabinet d'expertise et d'investissement en matière de codéveloppement, 
//               coopération décentralisée, développement local durable et gestion de projets qui vise 
//               principalement à fournir des prestations diverses prioritairement, à la diaspora camerounaise 
//               mais aussi aux particuliers et organisations qui nous sollicitent.
//             </p>
//             <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
//               Nous accompagnons l'État et les collectivités locales à travers des outils adaptés de 
//               mobilisation de la diaspora pour le développement durable. Nous promouvons la prise en 
//               compte du rapport migration-développement et la lutte contre l'immigration clandestine 
//               à travers l'entrepreneuriat et l'investissement jeune.
//             </p>
//             <Link 
//               to="/entreprise" 
//               className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//               data-aos="zoom-in"
//               data-aos-delay="400"
//             >
//               En savoir plus
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="lg:w-1/2" data-aos="fade-right">
//               <div className="relative">
//                 <img 
//                   src="/images/ino2.jpg" 
//                   alt="Notre Mission" 
//                   className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
//                 />
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
//                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
//               </div>
//             </div>

//             <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                   <Target className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-teko">
//                   NOTRE MISSION
//                 </h2>
//               </div>
              
//               <div className="space-y-6">
//                 {missions.map((mission, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-start"
//                     data-aos="fade-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-6 mt-12">
//                 {[
//                   { value: '100+', label: 'Projets Réalisés', icon: <Rocket className="w-5 h-5" /> },
//                   { value: '15+', label: 'Années d\'Expérience', icon: <Briefcase className="w-5 h-5" /> },
//                   { value: '50+', label: 'Clients Satisfaits', icon: <Users className="w-5 h-5" /> },
//                   { value: '10+', label: 'Pays Desservis', icon: <Globe className="w-5 h-5" /> }
//                 ].map((stat, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white p-4 rounded-xl shadow-md text-center"
//                     data-aos="zoom-in"
//                     data-aos-delay={index * 100}
//                   >
//                     <div className="text-blue-500 mb-2 flex justify-center">{stat.icon}</div>
//                     <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Actions Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
//               <div className="flex items-center mb-6">
//                 <div className="bg-green-100 p-3 rounded-lg mr-4">
//                   <Lightbulb className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-teko">
//                   NOS ACTIONS
//                 </h2>
//               </div>
              
//               <div className="space-y-6">
//                 {actions.map((action, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-start"
//                     data-aos="fade-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <div className="bg-green-100 p-1 rounded-full mr-4 flex-shrink-0 mt-1">
//                       <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//                     </div>
//                     <p className="text-lg text-gray-700 leading-relaxed">{action}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Values */}
//               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   { 
//                     title: 'Innovation', 
//                     description: 'Nous prônons l\'innovation constante pour améliorer nos services',
//                     color: 'bg-purple-100 text-purple-600'
//                   },
//                   { 
//                     title: 'Transparence', 
//                     description: 'Transparence totale dans toutes nos transactions et collaborations',
//                     color: 'bg-blue-100 text-blue-600'
//                   },
//                   { 
//                     title: 'Confiance', 
//                     description: 'Établir des relations de confiance durables avec nos partenaires',
//                     color: 'bg-orange-100 text-orange-600'
//                   },
//                   { 
//                     title: 'Engagement', 
//                     description: 'Engagement total envers le succès de chaque projet',
//                     color: 'bg-green-100 text-green-600'
//                   }
//                 ].map((value, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
//                     data-aos="flip-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <div className={`inline-block p-3 rounded-lg mb-4 ${value.color}`}>
//                       <HeartHandshake className="w-6 h-6" />
//                     </div>
//                     <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
//                     <p className="text-gray-600">{value.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
//               <div className="relative">
//                 <img 
//                   src="/images/ino5.jpg" 
//                   alt="Nos Actions" 
//                   className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
//                 />
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
//                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section 
//         className="relative py-16 md:py-24 bg-cover bg-center bg-fixed overflow-hidden"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/invest7.jpg)'
//         }}
//         data-aos="fade-in"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <div data-aos="fade-up">
//               <span className="text-orange-400 font-semibold text-lg mb-2 block flex items-center justify-center">
//                 <Users className="w-5 h-5 mr-2" />
//                 Envie de travailler avec nous ?
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-teko leading-tight">
//                 Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
//               </h2>
//             </div>

//             <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
//               <p className="text-lg text-gray-200 leading-relaxed">
//                 Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? 
//                 Chez nous, chaque membre est un pilier essentiel de notre succès. Découvrez des défis 
//                 inspirants, une culture collaborative et des opportunités de croissance. Ensemble, 
//                 bâtissons l'avenir et donnez vie à vos ambitions.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
//               <Link 
//                 to="/contact"
//                 className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//               >
//                 <Mail className="w-5 h-5 mr-2" />
//                 Contactez-nous
//               </Link>
              
//               <Link 
//                 to="/recrutement"
//                 className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 <TrendingUp className="w-5 h-5 mr-2" />
//                 Postuler maintenant
//               </Link>
//             </div>

//             {/* Contact Info */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" data-aos="fade-up" data-aos-delay="600">
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
//                 <div className="flex items-center justify-center mb-4">
//                   <div className="bg-orange-500 p-3 rounded-full">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold text-white mb-2">Téléphone</h4>
//                 <a href="tel:+237699377664" className="text-orange-300 hover:text-orange-200 transition-colors">
//                   +237 699 37 7664
//                 </a>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
//                 <div className="flex items-center justify-center mb-4">
//                   <div className="bg-blue-500 p-3 rounded-full">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
//                 <a href="mailto:lepaneliste@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors">
//                   lepaneliste@gmail.com
//                 </a>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
//                 <div className="flex items-center justify-center mb-4">
//                   <div className="bg-green-500 p-3 rounded-full">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold text-white mb-2">Adresse</h4>
//                 <p className="text-green-300">455 Rue Martin, Yaoundé-CMR</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Presentation;








































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
    <div className="presentation-page overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section 
        className="relative py-12 md:py-20 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/finance.jpg)',
          backgroundAttachment: 'scroll' // Remove fixed for mobile
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 font-teko leading-snug">
              QUI SOMMES-NOUS?
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 px-2 sm:px-0">
                DRINDSUD est un cabinet d'expertise et d'investissement en matière de codéveloppement, 
                coopération décentralisée, développement local durable et gestion de projets qui vise 
                principalement à fournir des prestations diverses prioritairement, à la diaspora camerounaise 
                mais aussi aux particuliers et organisations qui nous sollicitent.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 px-2 sm:px-0">
                Nous accompagnons l'État et les collectivités locales à travers des outils adaptés de 
                mobilisation de la diaspora pour le développement durable. Nous promouvons la prise en 
                compte du rapport migration-développement et la lutte contre l'immigration clandestine 
                à travers l'entrepreneuriat et l'investissement jeune.
              </p>
            </div>
            
            <Link 
              to="/entreprise" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section - Mobile Optimized */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Column */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0" data-aos="fade-right">
              <div className="relative mx-auto max-w-md lg:max-w-full">
                <div className="aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-4">
                  <img 
                    src="/images/ino2.jpg" 
                    alt="Notre Mission" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -top-3 -left-3 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-teko">
                  NOTRE MISSION
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {missions.map((mission, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 50, 200)}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>

              {/* Stats - Mobile Optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12">
                {[
                  { value: '100+', label: 'Projets', icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: '15+', label: 'Années', icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: '50+', label: 'Clients', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: '10+', label: 'Pays', icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-blue-500 mb-1 sm:mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section - Mobile Optimized */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content Column (comes first on mobile) */}
            <div className="lg:w-1/2 w-full order-2 lg:order-1" data-aos="fade-right">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-teko">
                  NOS ACTIONS
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {actions.map((action, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 50, 200)}
                  >
                    <div className="bg-green-100 p-1 rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-1">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{action}</p>
                  </div>
                ))}
              </div>

              {/* Values - Mobile Optimized */}
              <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { 
                    title: 'Innovation', 
                    description: 'Nous prônons l\'innovation constante',
                    color: 'bg-purple-100 text-purple-600'
                  },
                  { 
                    title: 'Transparence', 
                    description: 'Transparence totale dans nos transactions',
                    color: 'bg-blue-100 text-blue-600'
                  },
                  { 
                    title: 'Confiance', 
                    description: 'Relations de confiance durables',
                    color: 'bg-orange-100 text-orange-600'
                  },
                  { 
                    title: 'Engagement', 
                    description: 'Engagement total vers le succès',
                    color: 'bg-green-100 text-green-600'
                  }
                ].map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 ${value.color}`}>
                        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{value.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
              <div className="relative mx-auto max-w-md lg:max-w-full">
                <div className="aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-4">
                  <img 
                    src="/images/ino5.jpg" 
                    alt="Nos Actions" 
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-full opacity-20"></div>
                <div className="absolute -top-3 -left-3 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section 
        className="relative py-12 md:py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/invest7.jpg)',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div data-aos="fade-up">
              <span className="text-orange-400 font-semibold text-sm sm:text-base md:text-lg mb-2 block flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Envie de travailler avec nous ?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-teko leading-snug px-2 sm:px-0">
                Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
              </h2>
            </div>

            <div className="mb-6 md:mb-10" data-aos="fade-up" data-aos-delay="200">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed px-2 sm:px-0">
                Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? 
                Chez nous, chaque membre est un pilier essentiel de notre succès.
              </p>
            </div>

            {/* Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="400">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contactez-nous
              </Link>
              
              <Link 
                to="/recrutement"
                className="inline-flex items-center justify-center bg-transparent border border-white hover:bg-white/10 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Postuler maintenant
              </Link>
            </div>

            {/* Contact Info - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="bg-orange-500 p-2 sm:p-3 rounded-full">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Téléphone</h4>
                <a href="tel:+237699377664" className="text-orange-300 hover:text-orange-200 transition-colors text-sm sm:text-base">
                  +237 699 37 7664
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-full">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Email</h4>
                <a href="mailto:lepaneliste@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base break-all">
                  lepaneliste@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-full">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Adresse</h4>
                <p className="text-green-300 text-sm sm:text-base">455 Rue Martin, Yaoundé-CMR</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 sm:mt-12 text-center" data-aos="fade-up" data-aos-delay="800">
              <p className="text-gray-300 text-sm sm:text-base">
                Disponible du lundi au vendredi de 8h à 18h
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  Consultation gratuite
                </span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  Support 24/7
                </span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  Multilingue
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;