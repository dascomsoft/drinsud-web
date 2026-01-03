// import React from 'react';

// const testimonials = [
//   {
//     name: 'Johanna Kamga',
//     location: 'Canada',
//     profession: 'Pharmacienne',
//     image: '/images/po.jpg',
//     text: 'Une expérience exceptionnelle avec cette start-up multiservices (Drinsud) ! Leur gestion de séjour a simplifié ma vie au quotidien.',
//     rating: 5
//   },
//   {
//     name: 'Mofor Nick',
//     location: 'Luxembourg',
//     profession: 'Docteur',
//     image: '/images/po2.jpg',
//     text: 'Enfin une start-up qui comprend vraiment mes besoins financiers ! Leur approche intelligente a optimisé mes finances de manière significative.',
//     rating: 5
//   },
//   {
//     name: 'Pamela Bella',
//     location: 'France',
//     profession: 'Nutritionniste',
//     image: '/images/po3.jpg',
//     text: 'J\'ai confié la gestion de mes projets immobiliers à cette start-up, et le résultat est tout simplement remarquable !',
//     rating: 5
//   },
//   {
//     name: 'Marck Markony',
//     location: 'Autriche',
//     profession: 'Banquier',
//     image: '/images/po4.jpg',
//     text: 'Grâce à cette start-up, j\'ai pu concrétiser mes projets tout en épargnant de manière intelligente !',
//     rating: 5
//   }
// ];

// const Testimonials = () => {
//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex">
//         {[...Array(rating)].map((_, i) => (
//           <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section 
//       className="py-16 md:py-24 bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/ino7.jpeg)'
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12" data-aos="fade-down">
//           <span className="text-orange-400 font-semibold text-lg mb-2 block">Retour Clients</span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-teko">
//             TÉMOIGNAGES
//           </h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center mb-4">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
//                 />
//                 <div className="ml-4">
//                   <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
//                   <div className="flex items-center">
//                     <span className="text-orange-300 text-sm">{testimonial.location}</span>
//                     <span className="mx-2 text-gray-400">•</span>
//                     <span className="text-gray-300 text-sm">{testimonial.profession}</span>
//                   </div>
//                 </div>
//               </div>

//               <StarRating rating={testimonial.rating} />

//               <div className="mt-4">
//                 <p className="text-gray-200 italic leading-relaxed">"{testimonial.text}"</p>
//               </div>

//               <div className="mt-6 pt-4 border-t border-white/10">
//                 <div className="flex justify-end">
//                   <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation dots */}
//         <div className="flex justify-center mt-12 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-orange-500' : 'bg-white/30'}`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;










































import React, { useState } from 'react';

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
    text: 'Enfin une start-up qui comprend vraiment mes besoins financiers ! Leur approche intelligente a optimisé mes finances.',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="py-12 md:py-20 lg:py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(20, 21, 51, 0.85), rgba(20, 21, 51, 0.85)), url(/images/ino7.jpeg)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-down">
          <span className="text-orange-400 font-semibold text-sm sm:text-base md:text-lg mb-2 block">Retour Clients</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 font-teko">
            TÉMOIGNAGES
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-orange-500 flex-shrink-0"
                  loading="lazy"
                />
                <div className="ml-3 sm:ml-4 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-white truncate">{testimonial.name}</h4>
                  <div className="flex items-center text-xs sm:text-sm">
                    <span className="text-orange-300 truncate">{testimonial.location}</span>
                    <span className="mx-1 sm:mx-2 text-gray-400">•</span>
                    <span className="text-gray-300 truncate">{testimonial.profession}</span>
                  </div>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <div className="mt-3 sm:mt-4">
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-4">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="sm:hidden relative" data-aos="fade-up">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="ml-4 min-w-0">
                        <h4 className="text-base font-semibold text-white truncate">{testimonial.name}</h4>
                        <div className="flex items-center text-sm">
                          <span className="text-orange-300">{testimonial.location}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-300">{testimonial.profession}</span>
                        </div>
                      </div>
                    </div>

                    <StarRating rating={testimonial.rating} />

                    <div className="mt-4">
                      <p className="text-gray-200 text-sm leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 w-4' : 'bg-white/30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Dots */}
        <div className="hidden sm:flex justify-center mt-8 md:mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-orange-500' : 'bg-white/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;