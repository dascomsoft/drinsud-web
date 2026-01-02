import React from 'react';

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
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <span className="text-orange-500 font-semibold text-lg mb-2 block">
            Fait Confiance par plus de 200+
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-teko">
            Nos partenaires
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les meilleures entreprises pour vous offrir des services d'exception.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-orange-200">
                <div className="relative h-24 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Devenir partenaire */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-full shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Devenir Partenaire ?</h3>
            <p className="mb-4">Rejoignez notre réseau de partenaires prestigieux</p>
            <a 
              href="/entreprise#devenir-partenaire"
              className="inline-flex items-center bg-white text-orange-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300"
            >
              En savoir plus
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;