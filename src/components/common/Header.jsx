import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/presentation', label: 'Presentation' },
    { path: '/services', label: 'Service' },
    { path: '/entreprise', label: 'Entreprise' },
    { path: '/recrutement', label: 'Recrutement' },
    { path: '/contact', label: 'Contact' }
  ];

  const contactInfo = [
    { icon: <Phone size={18} />, text: '+237-699-37-7664' },
    { icon: <Mail size={18} />, text: 'lepaneliste@gmail.com' },
    { icon: <MapPin size={18} />, text: '455 Rue Martin, Yaounde-CMR' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-orange-500">{item.icon}</span>
                  <span className="text-sm font-script italic">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm hover:text-orange-500 transition-colors">FR</button>
              <span className="text-gray-400">|</span>
              <button className="text-sm hover:text-orange-500 transition-colors">EN</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/logoDrindsud.jpg" 
                alt="Drinsud Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
              />
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-white font-teko tracking-wider">DRINSUD</h1>
                <p className="text-orange-500 text-sm font-script italic">Solutions & Innovation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-orange-500 font-teko text-lg uppercase tracking-wide transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-teko text-lg uppercase transition-all duration-300 hover:scale-105">
                Devis
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-orange-500 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{ top: '88px' }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 text-2xl font-teko uppercase tracking-wider transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-8 space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 text-white">
                    <span className="text-orange-500">{item.icon}</span>
                    <span className="font-script italic">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-teko text-xl uppercase mt-8 transition-all duration-300">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;