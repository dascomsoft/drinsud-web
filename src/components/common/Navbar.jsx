import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Vérifier si l'admin est connecté au chargement
  useEffect(() => {
    checkAdminAuth();
  }, [location]);

  const checkAdminAuth = () => {
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    
    if (token && user) {
      setIsAdminLoggedIn(true);
      setAdminUser(JSON.parse(user));
    } else {
      setIsAdminLoggedIn(false);
      setAdminUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsAdminLoggedIn(false);
    setAdminUser(null);
    navigate('/');
    // Optionnel: fermer le menu mobile si ouvert
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Présentation', path: '/presentation' },
    { name: 'Entreprise', path: '/entreprise' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Items admin (affichés seulement si connecté)
  const adminItems = [
    { name: 'Admin Dashboard', path: '/admin/dashboard', icon: '📊' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-slate-700 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/DRINSUDLOGO.png"
              alt="DRINDSUD Logo"
              className="h-20 w-auto rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="ml-3 font-teko text-xl font-bold text-white hidden md:block">
              DRINSUD
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></span>
                )}
              </Link>
            ))}

            {/* Admin Section - Desktop */}
            {isAdminLoggedIn ? (
              <>
                {adminItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-orange-500'
                        : 'text-white hover:text-orange-300'
                    }`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"></span>
                    )}
                  </Link>
                ))}
                
                {/* Bouton Déconnexion Desktop */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 ml-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Déconnexion
                </button>
              </>
            ) : (
              /* Lien Admin Login - Desktop */
              <Link
                to="/admin/login"
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-300 ml-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Admin
              </Link>
            )}
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-80 bg-slate-700 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <img
                    src="/images/DRINSUDLOGO.png"
                    alt="DRINDSUD Logo"
                    className="h-14 w-auto rounded-full"
                  />
                  <span className="ml-3 font-teko text-xl font-bold text-white">
                    DRINSUD
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg"
                  aria-label="Fermer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Navigation principale mobile */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'bg-orange-600 text-white'
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Admin Section Mobile */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                    {isAdminLoggedIn ? 'Espace Admin' : 'Accès Admin'}
                  </h4>
                  
                  {isAdminLoggedIn ? (
                    <>
                      {/* Info admin connecté */}
                      <div className="bg-white/10 rounded-lg p-3 mb-3">
                        <p className="text-white text-sm">
                          <span className="font-semibold">Connecté en tant que :</span>
                          <br />
                          {adminUser?.username || 'Administrateur'}
                        </p>
                      </div>
                      
                      {/* Liens admin mobile */}
                      {adminItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                            location.pathname === item.path
                              ? 'bg-orange-600 text-white'
                              : 'text-white hover:bg-white/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                      
                      {/* Bouton Déconnexion Mobile */}
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Se déconnecter
                      </button>
                    </>
                  ) : (
                    /* Lien Admin Login Mobile */
                    <Link
                      to="/admin/login"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Espace Admin
                    </Link>
                  )}
                </div>
              </div>

              {/* Contact info mobile */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Contact Rapide</h4>
                <div className="space-y-3">
                  <a href="tel:+237699377664" className="flex items-center text-white/80 hover:text-orange-300 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +237 699 37 7664
                  </a>
                  <a href="mailto:lepaneliste@gmail.com" className="flex items-center text-white/80 hover:text-orange-300 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polygon points="22,6 12,13 2,6" />
                    </svg>
                    lepaneliste@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;