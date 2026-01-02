import React from 'react';

const WhyChooseUs = () => {
  const qualities = [
    {
      title: 'Innovation',
      description: 'Nous prônons au sein de notre entreprise l’esprit d’innovation. Ainsi, l’entreprise reste à l’écoute de ses employés, partenaires et clients pour améliorer ses services. C’est un élément qui fait la marque de notre entreprise.'
    },
    {
      title: 'Professionalisme',
      description: 'Nos services sont guidés par le professionnalisme de notre équipe pour assurer un service de qualité à nos clients. Cela se traduit dans la rigueur avec laquelle nous choisissons nos partenaires, commissionnaires et prestataires.'
    },
    {
      title: 'Transparence',
      description: 'Notre collaboration avec nos clients et partenaires est caractérisée par la transparence des transactions et services afin d’établir la confiance et une relation durable avec ces derniers.'
    },
    {
      title: 'La confiance',
      description: 'La finalité principale de notre action en tant qu’entreprise de facilitation et d’expertise locale est d’établir une relation de confiance entre collaborateurs, nos partenaires et les membres de la diaspora.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-teko">
            Pourquoi nous choisir?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <img 
                src="/images/business-partners.jpg" 
                alt="Business Partners" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Explorez l'Excellence avec Nous : Votre Guichet Unique pour une Gestion Sans Compromis !
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Découvrez la différence avec notre plateforme intégrée qui excelle dans la gestion de séjours, 
              les finances, les bâtiments, l'épargne et les projets. Ceci dit, les raisons pouvant vous amener 
              à nous faire confiance sont les suivantes :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{quality.title}</h4>
                  </div>
                  <p className="text-gray-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;