import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-teko text-gray-800">
              A PROPOS
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DRINSUD est un cabinet d'expertise et d'investissement en matière de codéveloppement, 
              coopération décentralisée, développement local durable et gestion de projets qui vise 
              principalement à fournir des prestations diverses prioritairement, à la diaspora 
              camerounaise mais aussi aux particuliers et organisations qui nous sollicitent.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous accompagnons l'État et les collectivités locales à travers des outils adaptés 
              de mobilisation de la diaspora pour le développement durable. Nous promouvons la prise 
              en compte du rapport migration-développement et la lutte contre l'immigration 
              clandestine à travers l'entrepreneuriat et l'investissement jeune.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
              En savoir plus
            </button>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <img 
                src="/images/plan1.jpeg" 
                alt="About DRINSUD" 
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;