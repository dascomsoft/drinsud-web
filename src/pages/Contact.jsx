import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const contactInfo = [
    {
      id: 1,
      title: "LOCATION",
      content: "Address : 455 Rue Martin , Yaounde-CMR",
      icon: <MapPin size={50} className="text-orange-500 mx-auto" />
    },
    {
      id: 2,
      title: "PHONE",
      content: "Tel : +237 (699-37-7664)",
      icon: <Phone size={50} className="text-orange-500 mx-auto" />
    },
    {
      id: 3,
      title: "EMAIL",
      content: "Email: lepaneliste@gmail.com",
      icon: <Mail size={50} className="text-orange-500 mx-auto" />
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !surname || !email || !message) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    console.log('Form submitted:', { name, surname, email, message });
    alert('Message envoyé avec succès!');
    e.target.reset();
  };

  return (
    <>
      {/* <Header /> */}
      
      {/* Section Call */}
      <section 
        className="relative bg-gradient-to-r from-blue-900/80 to-blue-900/80 bg-cover bg-center bg-fixed py-32"
        style={{ backgroundImage: 'linear-gradient(rgba(20,21,51,0.8),rgba(20,21,51,0.8)), url(/images/imageAbout2.jpg)' }}
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-teko tracking-tight">
              Contactez-nous/
            </h2>
            <p className="text-orange-500 text-lg md:text-xl mt-4 font-script italic max-w-3xl mx-auto">
              Contactez-nous pour toutes questions, collaborations ou informations supplémentaires.<br className="hidden md:block" />
              Nous sommes ravis d'échanger avec vous !
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6 lg:gap-8 py-8" data-aos="fade-up" data-aos-delay="200">
            {contactInfo.map((item) => (
              <div 
                key={item.id} 
                className="flex-1 max-w-md bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white font-teko mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-200 font-script italic text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/ino3.jpg" 
                  alt="Contact Drinsud" 
                  className="w-full h-[400px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold font-teko mb-2">Notre équipe</h3>
                  <p className="font-script italic text-lg">Prête à vous accompagner</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-800 font-teko mb-2">Envoyez-nous un message</h3>
                <p className="text-gray-600 mb-8 font-script italic">Nous vous répondrons dans les plus brefs délais</p>
                
                <ContactForm onSubmit={handleFormSubmit} />
                
                {showError && (
                  <div 
                    className="mt-6 p-4 text-center bg-red-50 border border-red-200 text-red-600 font-bold text-lg rounded-lg animate-pulse"
                    role="alert"
                  >
                    ⚠️ Veuillez remplir tous les champs obligatoires !
                  </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    En nous contactant, vous acceptez notre <a href="#" className="text-orange-500 hover:underline">politique de confidentialité</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Contact;