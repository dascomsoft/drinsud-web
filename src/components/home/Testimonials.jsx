import React from 'react';

const testimonials = [
  {
    name: 'Johanna Kamga',
    location: 'Canada',
    profession: 'Pharmacienne',
    image: '/images/po.jpg',
    text: 'Une expérience exceptionnelle avec cette start-up multiservices (Drinsud) ! Leur gestion de séjour a simplifié ma vie au quotidien.',
    rating: 5
  },
  {
    name: 'Mofor Nick',
    location: 'Luxembourg',
    profession: 'Docteur',
    image: '/images/po2.jpg',
    text: 'Enfin une start-up qui comprend vraiment mes besoins financiers ! Leur approche intelligente a optimisé mes finances de manière significative.',
    rating: 5
  },
  {
    name: 'Pamela Bella',
    location: 'France',
    profession: 'Nutritionniste',
    image: '/images/po3.jpg',
    text: 'J\'ai confié la gestion de mes projets immobiliers à cette start-up, et le résultat est tout simplement remarquable !',
    rating: 5
  },
  {
    name: 'Marck Markony',
    location: 'Autriche',
    profession: 'Banquier',
    image: '/images/po4.jpg',
    text: 'Grâce à cette start-up, j\'ai pu concrétiser mes projets tout en épargnant de manière intelligente !',
    rating: 5
  }
];

const Testimonials = () => {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      className="py-16 md:py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/ino7.jpeg)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <span className="text-orange-400 font-semibold text-lg mb-2 block">Retour Clients</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-teko">
            TÉMOIGNAGES
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex items-center">
                    <span className="text-orange-300 text-sm">{testimonial.location}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-300 text-sm">{testimonial.profession}</span>
                  </div>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <div className="mt-4">
                <p className="text-gray-200 italic leading-relaxed">"{testimonial.text}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-end">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-orange-500' : 'bg-white/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;