import React from 'react';

const ServiceCategory = ({ category, index }) => {
  return (
    <section 
      id={category.id}
      className="relative py-20 md:py-28"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Background image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${category.image})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>
      
      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-teko">
            {category.title}
          </h2>
          <div className={`w-32 h-1 ${category.iconColor.replace('text', 'bg')} mx-auto mb-6`}></div>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-300 mb-6">
            {category.subtitle}
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {category.services.map((service, serviceIndex) => (
            <div 
              key={serviceIndex}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={serviceIndex * 50}
            >
              {/* Icône */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${category.iconColor} bg-white/20 backdrop-blur-sm mr-4`}>
                  {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-bold text-white font-teko">
                  {service.name}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-200 leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              
              {/* Ligne décorative */}
              <div className={`h-0.5 w-16 ${category.iconColor.replace('text', 'bg')} opacity-50 mt-4`}></div>
              
              {/* Effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Notes supplémentaires selon la catégorie */}
        {category.id === 'event' && (
          <div className="mt-8 text-center">
            <p className="text-red-300 font-semibold text-lg">+ Autres services disponibles sur demande</p>
          </div>
        )}

        {category.id === 'bati' && (
          <div className="mt-8 text-center">
            <p className="text-green-300 italic">
              Faites nous confiance pour vos projets de construction au pays
            </p>
          </div>
        )}
        
        {/* Ligne décorative en bas */}
        <div className={`h-1 w-24 ${category.iconColor.replace('text', 'bg')} mx-auto mt-12 opacity-30`}></div>
      </div>
    </section>
  );
};

export default ServiceCategory;