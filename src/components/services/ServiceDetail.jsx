// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams, Link } from 'react-router-dom';
// import { 
//   ArrowLeft, 
//   Phone, 
//   Mail, 
//   Calendar, 
//   CheckCircle, 
//   Users, 
//   Target,
//   Star,
//   Shield,
//   Clock,
//   DollarSign,
//   Globe,
//   Award,
//   ChevronRight
// } from 'lucide-react';
// import ContactForm from '../contact/ContactForm';

// const ServiceDetail = () => {
//   const location = useLocation();
//   const { categoryId, serviceSlug } = useParams();
//   const [service, setService] = useState(null);
//   const [relatedServices, setRelatedServices] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
    
//     // Récupérer les données du service depuis l'état de navigation ou simuler
//     if (location.state?.service) {
//       setService(location.state.service);
//       setIsLoading(false);
//     } else {
//       // Simuler le chargement des données (dans un cas réel, ce serait une API)
//       setTimeout(() => {
//         const mockService = {
//           id: 1,
//           name: decodeURIComponent(serviceSlug).replace(/-/g, ' '),
//           description: `Description détaillée du service ${decodeURIComponent(serviceSlug).replace(/-/g, ' ')}. Ce service offre des solutions complètes et professionnelles adaptées à vos besoins spécifiques.`,
//           fullDescription: `Le service ${decodeURIComponent(serviceSlug).replace(/-/g, ' ')} est notre spécialité. Nous fournissons des solutions sur mesure avec une expertise approfondie dans le domaine. Notre équipe de professionnels dédiés assure une qualité exceptionnelle et un suivi personnalisé pour chaque projet.`,
//           icon: <CheckCircle size={24} />,
//           image: '/images/service-detail.jpg',
//           features: [
//             'Solution personnalisée selon vos besoins',
//             'Équipe d\'experts certifiés',
//             'Support 24/7 disponible',
//             'Rapports détaillés et analyses',
//             'Suivi continu et optimisation',
//             'Garantie de satisfaction'
//           ],
//           benefits: [
//             'Augmentation de la productivité',
//             'Réduction des coûts opérationnels',
//             'Amélioration de la qualité',
//             'Innovation continue',
//             'Support technique expert'
//           ],
//           process: [
//             'Consultation initiale et analyse des besoins',
//             'Proposition de solution personnalisée',
//             'Validation et planification du projet',
//             'Mise en œuvre par notre équipe d\'experts',
//             'Suivi et optimisation continue',
//             'Support et maintenance'
//           ],
//           pricing: [
//             { plan: 'Basique', price: 'Sur devis', features: ['Consultation', 'Proposition'] },
//             { plan: 'Standard', price: 'Sur devis', features: ['Mise en œuvre', 'Support'] },
//             { plan: 'Premium', price: 'Sur devis', features: ['Solution complète', 'Support premium'] }
//           ],
//           testimonials: [
//             { name: 'Client A', role: 'CEO', company: 'Entreprise X', text: 'Excellent service, équipe très professionnelle.' },
//             { name: 'Client B', role: 'Directeur', company: 'Société Y', text: 'Résultats dépassant nos attentes.' }
//           ],
//           faqs: [
//             { question: 'Quel est le délai de mise en œuvre ?', answer: 'Le délai varie selon la complexité du projet.' },
//             { question: 'Proposez-vous une garantie ?', answer: 'Oui, tous nos services sont garantis.' }
//           ],
//           stats: [
//             { label: 'Clients satisfaits', value: '98%', icon: <Users /> },
//             { label: 'Projets réalisés', value: '500+', icon: <Target /> },
//             { label: 'Support rapide', value: '24/7', icon: <Clock /> },
//             { label: 'Expertise', value: '10 ans', icon: <Award /> }
//           ]
//         };
//         setService(mockService);
//         setIsLoading(false);
//       }, 500);
//     }

//     // Simuler les services liés
//     setRelatedServices([
//       { id: 1, name: 'Service Similaire 1', category: categoryId },
//       { id: 2, name: 'Service Similaire 2', category: categoryId },
//       { id: 3, name: 'Service Similaire 3', category: categoryId }
//     ]);
//   }, [location.state, serviceSlug, categoryId]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Chargement des détails du service...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!service) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Service non trouvé</h2>
//         <p className="text-gray-600 mb-8">Le service que vous recherchez n'existe pas.</p>
//         <Link 
//           to="/services" 
//           className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Retour aux services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-12 md:py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-6xl mx-auto">
//             {/* Breadcrumb */}
//             <nav className="flex items-center mb-8 text-sm">
//               <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
//               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
//               <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
//               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
//               <Link to={`/services#${categoryId}`} className="text-gray-300 hover:text-white transition-colors capitalize">
//                 {categoryId?.replace('-', ' ')}
//               </Link>
//               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
//               <span className="text-orange-400 font-medium truncate">{service.name}</span>
//             </nav>

//             <div className="flex flex-col lg:flex-row items-center gap-8">
//               <div className="lg:w-3/5">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm mr-4">
//                     {React.cloneElement(service.icon, { size: 32, className: 'text-orange-400' })}
//                   </div>
//                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-teko">
//                     {service.name}
//                   </h1>
//                 </div>
//                 <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
//                   {service.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-4">
//                   <Link 
//                     to="/contact" 
//                     className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
//                   >
//                     <Phone className="w-5 h-5 mr-2" />
//                     Demander un devis
//                   </Link>
//                   <button 
//                     onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
//                     className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
//                   >
//                     <Mail className="w-5 h-5 mr-2" />
//                     Nous contacter
//                   </button>
//                 </div>
//               </div>
              
//               <div className="lg:w-2/5">
//                 {service.image && (
//                   <div className="relative">
//                     <img 
//                       src={service.image} 
//                       alt={service.name}
//                       className="w-full rounded-2xl shadow-2xl"
//                     />
//                     <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
//                       <DollarSign size={32} />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {service.stats && (
//         <section className="py-12 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {service.stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-200 hover:border-orange-300 transition-colors"
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                 >
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
//                     {React.cloneElement(stat.icon, { className: 'w-6 h-6 text-orange-600' })}
//                   </div>
//                   <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
//                   <div className="text-gray-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Main Content */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24 space-y-6">
//                 {/* CTA Card */}
//                 <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 shadow-lg">
//                   <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//                     <Phone className="w-5 h-5 mr-2 text-blue-600" />
//                     Demander un devis gratuit
//                   </h3>
//                   <p className="text-gray-600 mb-6">
//                     Contactez-nous pour une consultation gratuite et obtenez un devis personnalisé.
//                   </p>
//                   <Link 
//                     to="/contact"
//                     className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
//                   >
//                     Demander un devis
//                   </Link>
//                 </div>

//                 {/* Features */}
//                 {service.features && (
//                   <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h4 className="text-lg font-bold text-gray-800 mb-4">Caractéristiques</h4>
//                     <ul className="space-y-3">
//                       {service.features.map((feature, index) => (
//                         <li key={index} className="flex items-center text-gray-700">
//                           <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Benefits */}
//                 {service.benefits && (
//                   <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h4 className="text-lg font-bold text-gray-800 mb-4">Avantages</h4>
//                     <ul className="space-y-3">
//                       {service.benefits.map((benefit, index) => (
//                         <li key={index} className="flex items-center text-gray-700">
//                           <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
//                           <span>{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-12">
//               {/* Description complète */}
//               <div className="bg-white rounded-xl p-8 shadow-lg">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
//                   Description détaillée
//                 </h2>
//                 <div className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     {service.fullDescription}
//                   </p>
//                   <p className="text-gray-700 leading-relaxed">
//                     Notre approche combine expertise technique, innovation et engagement client pour
//                     garantir des résultats exceptionnels. Chaque projet est traité avec le plus grand
//                     soin et une attention particulière aux détails.
//                   </p>
//                 </div>
//               </div>

//               {/* Process */}
//               {service.process && (
//                 <div className="bg-white rounded-xl p-8 shadow-lg">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
//                     <Target className="w-6 h-6 mr-3 text-orange-500" />
//                     Notre Processus
//                   </h2>
//                   <div className="space-y-6">
//                     {service.process.map((step, index) => (
//                       <div 
//                         key={index}
//                         className="flex items-start"
//                         data-aos="fade-up"
//                         data-aos-delay={index * 100}
//                       >
//                         <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
//                           {index + 1}
//                         </div>
//                         <div className="flex-grow">
//                           <h4 className="text-lg font-semibold text-gray-800 mb-2">Étape {index + 1}</h4>
//                           <p className="text-gray-600">{step}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Pricing */}
//               {service.pricing && (
//                 <div className="bg-white rounded-xl p-8 shadow-lg" id="pricing">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//                     Options tarifaires
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {service.pricing.map((plan, index) => (
//                       <div 
//                         key={index}
//                         className={`border rounded-xl p-6 text-center ${
//                           plan.plan === 'Standard' 
//                             ? 'border-orange-500 shadow-lg transform scale-105' 
//                             : 'border-gray-200'
//                         }`}
//                         data-aos="fade-up"
//                         data-aos-delay={index * 100}
//                       >
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.plan}</h3>
//                         <div className="text-3xl font-bold text-orange-500 mb-6">{plan.price}</div>
//                         <ul className="space-y-3 mb-8">
//                           {plan.features.map((feature, idx) => (
//                             <li key={idx} className="text-gray-600">{feature}</li>
//                           ))}
//                         </ul>
//                         <button className="w-full py-3 rounded-lg font-medium transition-colors bg-gray-800 hover:bg-gray-900 text-white">
//                           Choisir ce plan
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       {service.faqs && (
//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//               Questions fréquentes
//             </h2>
//             <div className="max-w-3xl mx-auto space-y-4">
//               {service.faqs.map((faq, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-lg p-6 shadow-sm"
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Contact Section */}
//       <section className="py-12 bg-gradient-to-r from-blue-50 to-gray-50" id="contact-section">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
//                 <h2 className="text-2xl font-bold mb-6">Intéressé par ce service ?</h2>
//                 <p className="mb-8">
//                   Contactez-nous pour discuter de vos besoins spécifiques et obtenir une solution personnalisée.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <Phone className="w-5 h-5 mr-3" />
//                     <span>+237 699 37 7664</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-5 h-5 mr-3" />
//                     <span>lepaneliste@gmail.com</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="w-5 h-5 mr-3" />
//                     <span>Lundi - Vendredi: 9h00 - 18h00</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="md:w-3/5 p-8">
//                 <ContactForm 
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     alert('Demande envoyée ! Nous vous contacterons bientôt.');
//                     e.target.reset();
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Services */}
//       {relatedServices.length > 0 && (
//         <section className="py-12 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//               Services similaires
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedServices.map((relatedService, index) => (
//                 <div 
//                   key={index}
//                   className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors"
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                     {relatedService.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Découvrez ce service complémentaire à {service.name}.
//                   </p>
//                   <Link 
//                     to={`/services/${relatedService.category}/${relatedService.name.toLowerCase().replace(/ /g, '-')}`}
//                     className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
//                   >
//                     En savoir plus
//                     <ChevronRight className="w-4 h-4 ml-1" />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default ServiceDetail;


















































































import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  CheckCircle, 
  Users, 
  Target,
  Star,
  Shield,
  Clock,
  DollarSign,
  Award,
  ChevronRight,
  Home,
  Building,
  Calendar,
  ChefHat,
  Wallet,
  Briefcase,
  Globe,
  Car,
  Users as UsersIcon
} from 'lucide-react';
import ContactForm from '../contact/ContactForm';

const ServiceDetail = () => {
  const location = useLocation();
  const { categoryId, serviceSlug } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mapper les icônes par catégorie
  const categoryIcons = {
    event: <Calendar className="w-8 h-8" />,
    foncier: <Building className="w-8 h-8" />,
    bati: <Home className="w-8 h-8" />,
    finance: <Wallet className="w-8 h-8" />,
    humaine: <UsersIcon className="w-8 h-8" />,
    invest: <DollarSign className="w-8 h-8" />,
    gestion: <Briefcase className="w-8 h-8" />,
    sejour: <Globe className="w-8 h-8" />,
    locale: <Target className="w-8 h-8" />
  };

  // Mapper les couleurs par catégorie
  const categoryColors = {
    event: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    foncier: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    bati: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    finance: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    humaine: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    invest: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    gestion: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
    sejour: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
    locale: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Récupérer les données du service
    if (location.state?.service) {
      setService(location.state.service);
      setIsLoading(false);
    } else {
      // Simulation de données
      setTimeout(() => {
        const serviceName = decodeURIComponent(serviceSlug).replace(/-/g, ' ');
        const categoryInfo = categoryColors[categoryId] || categoryColors.event;
        
        setService({
          name: serviceName,
          category: categoryId,
          description: `Service ${serviceName} - Une solution professionnelle et complète.`,
          fullDescription: `Notre service ${serviceName} offre des solutions sur mesure avec une expertise approfondie. Nous fournissons un accompagnement personnalisé pour garantir votre satisfaction.`,
          features: [
            'Solution personnalisée selon vos besoins',
            'Équipe d\'experts certifiés',
            'Support 24/7 disponible',
            'Suivi continu et optimisation'
          ],
          benefits: [
            'Gain de temps et d\'efficacité',
            'Réduction des coûts',
            'Amélioration de la qualité',
            'Support technique expert'
          ],
          icon: categoryIcons[categoryId] || <CheckCircle />,
          categoryColor: categoryInfo
        });
        setIsLoading(false);
      }, 500);
    }
  }, [location.state, serviceSlug, categoryId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des détails du service...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service non trouvé</h2>
        <p className="text-gray-600 mb-8">Le service que vous recherchez n'existe pas.</p>
        <Link 
          to="/services" 
          className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour aux services
        </Link>
      </div>
    );
  }

  const categoryInfo = categoryColors[service.category] || categoryColors.event;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`relative py-12 md:py-20 ${categoryInfo.bg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center mb-8 text-sm">
              <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link to="/services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link 
                to={`/services#${service.category}`} 
                className={`${categoryInfo.text} hover:underline capitalize`}
              >
                {service.category.replace('-', ' ')}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className={`${categoryInfo.text} font-medium truncate`}>{service.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-3/5">
                <div className="flex items-center mb-4">
                  <div className={`p-4 ${categoryInfo.bg} ${categoryInfo.border} rounded-xl mr-4`}>
                    <div className={categoryInfo.text}>
                      {service.icon}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-teko text-gray-800">
                    {service.name}
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Demander un devis
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className={`w-full h-64 rounded-2xl shadow-2xl ${categoryInfo.bg} ${categoryInfo.border} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`${categoryInfo.text} mb-4`}>
                        {service.icon}
                      </div>
                      <p className={`font-medium ${categoryInfo.text}`}>
                        Catégorie: {service.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className={`rounded-xl p-6 ${categoryInfo.border} border shadow-lg ${categoryInfo.bg}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact rapide
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-500 mr-3" />
                      <a href="tel:+237699377664" className="text-gray-700 hover:text-blue-600">
                        +237 699 37 7664
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-500 mr-3" />
                      <a href="mailto:lepaneliste@gmail.com" className="text-gray-700 hover:text-blue-600">
                        lepaneliste@gmail.com
                      </a>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Demander un devis
                  </Link>
                </div>

                {/* Features */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Caractéristiques</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Avantages</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description complète */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                  Description détaillée
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Notre équipe d'experts vous accompagne à chaque étape pour garantir le succès de votre projet.
                    Nous combinons expertise technique, innovation et engagement client pour des résultats exceptionnels.
                  </p>
                </div>
              </div>

              {/* Processus standard */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-orange-500" />
                  Notre Processus
                </h2>
                <div className="space-y-6">
                  {[
                    'Consultation initiale et analyse des besoins',
                    'Proposition de solution personnalisée',
                    'Validation et planification',
                    'Mise en œuvre par nos experts',
                    'Suivi et optimisation continue'
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Étape {index + 1}</h4>
                        <p className="text-gray-600">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Pourquoi nous choisir ?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Clients satisfaits', value: '98%', icon: <Users /> },
                    { label: 'Projets réalisés', value: '500+', icon: <Target /> },
                    { label: 'Support rapide', value: '24/7', icon: <Clock /> },
                    { label: 'Expertise', value: '10 ans', icon: <Award /> }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-md">
                        <div className="text-orange-500">{stat.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Intéressé par ce service ?
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
                  <p className="mb-8">
                    Discutons de vos besoins spécifiques pour une solution personnalisée.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+237 699 37 7664</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>lepaneliste@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Lun - Ven: 9h - 18h</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <ContactForm 
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Demande envoyée ! Nous vous contacterons bientôt.');
                      e.target.reset();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à tous les services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;