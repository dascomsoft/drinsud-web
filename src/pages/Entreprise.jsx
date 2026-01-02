import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { 
  Users, 
  Handshake, 
  Target, 
  Award, 
  Star, 
  TrendingUp, 
  Shield,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users2,
  Building,
  Network,
  Lightbulb
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Entreprise = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const partenairesLogos = [
    { id: 1, logo: '/images/client-1.png', alt: 'Partenaire 1' },
    { id: 2, logo: '/images/client-2.png', alt: 'Partenaire 2' },
    { id: 3, logo: '/images/client-3.png', alt: 'Partenaire 3' },
    { id: 4, logo: '/images/client-4.png', alt: 'Partenaire 4' },
    { id: 5, logo: '/images/client-5.png', alt: 'Partenaire 5' },
    { id: 6, logo: '/images/client-6.png', alt: 'Partenaire 6' },
    { id: 7, logo: '/images/client-7.png', alt: 'Partenaire 7' },
    { id: 8, logo: '/images/client-8.png', alt: 'Partenaire 8' },
  ];

  const avantages = [
    {
      id: 1,
      title: 'Visibilité Maximale',
      description: 'Profitez d\'une visibilité exceptionnelle auprès de notre clientèle et de notre réseau professionnel.',
      icon: <Globe className="w-12 h-12" />
    },
    {
      id: 2,
      title: 'Collaborations Stratégiques',
      description: 'Accédez à des collaborations stratégiques, stimulant la croissance mutuelle.',
      icon: <Network className="w-12 h-12" />
    },
    {
      id: 3,
      title: 'Accès Privilégié',
      description: 'Bénéficiez d\'un accès exclusif à nos événements, ressources et opportunités spéciales.',
      icon: <Star className="w-12 h-12" />
    }
  ];

  const etapesPartenariat = [
    {
      id: 1,
      title: 'Contactez-nous',
      description: 'Exprimez votre intérêt en nous contactant via notre formulaire en ligne ou en appelant notre équipe dédiée.',
      icon: <Phone className="w-10 h-10" />
    },
    {
      id: 2,
      title: 'Échangeons',
      description: 'Discutons de vos objectifs, de vos compétences et de la manière dont notre partenariat peut être mutuellement bénéfique.',
      icon: <Users2 className="w-10 h-10" />
    },
    {
      id: 3,
      title: 'Collaborons',
      description: 'Ensemble, façonnons un partenariat solide et créons des synergies qui propulseront nos activités respectives.',
      icon: <Handshake className="w-10 h-10" />
    }
  ];

  return (
    <div className="entreprise-page">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.85), rgba(20,21,51,0.85)), url(/images/partner.jpeg)'
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-teko leading-tight" data-aos="fade-up">
              Bâtissons l'Avenir Ensemble
            </h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-90" data-aos="fade-up" data-aos-delay="300">
              Bienvenue dans l'univers du partenariat chez DRINSUD. Nous croyons en la force des collaborations 
              fructueuses, où chaque partenariat est une occasion d'atteindre de nouveaux sommets. En tant que 
              partenaire, vous intégrez une communauté d'excellence, partageant notre passion pour l'innovation, 
              la qualité et la croissance.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <Link 
                to="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Devenir partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Partenaires */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-teko uppercase" data-aos="fade-up">
              Nos partenaires
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
            
            <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">Collaborations d'Excellence</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Découvrez nos partenaires, des acteurs clés qui contribuent à notre succès. Chez DRINSUD, nous 
                valorisons chaque relation et considérons nos partenaires comme une extension précieuse de notre 
                équipe. Explorez notre réseau diversifié, allant des entreprises locales aux leaders de l'industrie mondiale.
              </p>
            </div>

            <h4 className="text-xl font-semibold text-orange-500 mb-12" data-aos="fade-up" data-aos-delay="400">
              Fait Confiance par plus de 200+
            </h4>
          </div>

          {/* Logos des partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="500">
            {partenairesLogos.map((partenaire) => (
              <div 
                key={partenaire.id} 
                className="bg-white rounded-2xl border border-gray-300 p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
              >
                <img 
                  src={partenaire.logo} 
                  alt={partenaire.alt}
                  className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Devenir Partenaire */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-teko uppercase" data-aos="fade-up">
              Devenir Partenaire
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Rejoignez notre Aventure</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Êtes-vous prêt à faire partie de notre histoire de succès ? Devenez notre partenaire et participez 
                  à une aventure où le potentiel de croissance est illimité. Nous recherchons des partenaires engagés, 
                  des collaborateurs passionnés qui partagent nos valeurs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En tant que partenaire, vous bénéficierez d'une collaboration stratégique, d'une visibilité accrue 
                  et d'opportunités exclusives au sein de notre réseau professionnel.
                </p>
              </div>
              <div className="flex items-center text-orange-500 font-semibold">
                <Lightbulb className="w-5 h-5 mr-2" />
                <span>Joignez-vous à nous pour créer ensemble un futur prospère</span>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/partner1.jpg" 
                  alt="Partenaire DRINSUD"
                  className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold font-teko">Ensemble vers l'excellence</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Engagement */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/partner.jpeg" 
                  alt="Notre engagement"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-teko">Notre Engagement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Chez DRINSUD, chaque partenariat est guidé par des principes solides. Nous nous engageons à 
                fournir un soutien mutuel, une transparence totale et une communication ouverte.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Soutien mutuel et accompagnement personnalisé</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Transparence totale dans toutes nos relations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Communication ouverte et régulière</span>
                </div>
              </div>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Alliance d'Excellence */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-20 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,21,51,0.85), rgba(20,21,51,0.85)), url(/images/ino.jpeg)'
        }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-6" data-aos="fade-up">
              Unissons nos Forces pour l'Excellence
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-teko leading-tight" data-aos="fade-up" data-aos-delay="200">
              Alliance d'Excellence: Charte Partenariat & Proposition de Services
            </h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90" data-aos="fade-up" data-aos-delay="300">
              Bienvenue dans le monde raffiné de notre alliance. Notre Charte Partenariat, c'est l'engagement envers 
              l'intégrité, l'innovation et la qualité. En adhérant à cette charte, vous rejoignez une communauté où l'excellence est la norme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-500 transition-all duration-300">
                <h4 className="text-2xl font-bold mb-6 font-teko">Charte Partenariat: Les Fondations de Notre Collaboration</h4>
                <p className="text-gray-200 leading-relaxed">
                  Notre charte crée un cadre solide, favorisant des relations de confiance et une collaboration 
                  fructueuse. Elle incarne nos valeurs communes et guide notre engagement envers le succès mutuel.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-orange-500 transition-all duration-300">
                <h4 className="text-2xl font-bold mb-6 font-teko">Proposez Vos Services: L'Opportunité de Briller</h4>
                <p className="text-gray-200 leading-relaxed">
                  Partagez votre expertise avec une communauté dynamique. Proposez vos services et faites partie 
                  d'une aventure où l'excellence est reconnue et récompensée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-teko" data-aos="fade-up">
            Avantages du Partenariat avec DRINSUD
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            {avantages.map((avantage) => (
              <div 
                key={avantage.id} 
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                  <div className="text-orange-500">
                    {avantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-teko">{avantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Comment Devenir Partenaire */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-teko" data-aos="fade-up">
            Comment Devenir Partenaire
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            {etapesPartenariat.map((etape, index) => (
              <div 
                key={etape.id} 
                className="relative bg-white rounded-2xl border-2 border-amber-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                  <div className="text-orange-500">
                    {etape.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-teko">{etape.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{etape.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Commencer votre partenariat
            </Link>
          </div>
        </div>
      </section>

      {/* Section Connection */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/images/invest7.jpg)'
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-6" data-aos="fade-up">
              Envie de travailler avec nous ?
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-teko leading-tight" data-aos="fade-up" data-aos-delay="200">
              Rejoignez notre Équipe : Explorez des Opportunités Passionnantes!
            </h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90" data-aos="fade-up" data-aos-delay="300">
              Vous recherchez un environnement stimulant, propice à l'épanouissement professionnel ? Chez nous, 
              chaque membre est un pilier essentiel de notre succès. Découvrez des défis inspirants, une culture 
              collaborative et des opportunités de croissance. Ensemble, bâtissons l'avenir et donnez vie à vos ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <Link 
                to="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Contactez-nous
              </Link>
              <Link 
                to="/recrutement"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Voir nos offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Entreprise;