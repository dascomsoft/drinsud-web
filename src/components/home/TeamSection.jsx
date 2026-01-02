import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Mail,
  Users,
  ChevronRight
} from 'lucide-react';

// Données des membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO & Fondateur',
    image: '/images/me.jpg',
    description: 'Expert en développement durable avec 15 ans d\'expérience.',
    email: 'john.doe@drinsud.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    facebook: 'https://facebook.com/johndoe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Directrice Financière',
    image: '/images/menber.jpg',
    description: 'Spécialiste en finance et investissement international.',
    email: 'jane.smith@drinsud.com',
    linkedin: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    position: 'Directeur des Opérations',
    image: '/images/menber1.jpg',
    description: 'Expert en gestion de projets et ressources humaines.',
    email: 'robert.johnson@drinsud.com',
    linkedin: 'https://linkedin.com/in/robertjohnson',
    twitter: 'https://twitter.com/robertjohnson',
    facebook: 'https://facebook.com/robertjohnson'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    position: 'Responsable Relations',
    image: '/images/te.jpg',
    description: 'Spécialiste en relations diaspora et partenariats.',
    email: 'maria.garcia@drinsud.com',
    linkedin: 'https://linkedin.com/in/mariagarcia',
    twitter: 'https://twitter.com/mariagarcia',
    facebook: 'https://facebook.com/mariagarcia'
  }
];

const TeamSection = () => {
  const [members, setMembers] = useState([]);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    // Simulation d'un appel API
    setMembers(teamMembers);
  }, []);

  const socialIcons = [
    { name: 'linkedin', component: Linkedin, color: 'text-blue-600 hover:bg-blue-100' },
    { name: 'twitter', component: Twitter, color: 'text-sky-500 hover:bg-sky-100' },
    { name: 'facebook', component: Facebook, color: 'text-blue-700 hover:bg-blue-100' }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <span className="text-orange-500 font-semibold text-lg mb-2 block flex items-center justify-center">
            <Users className="w-5 h-5 mr-2" />
            Membre de l'Équipe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-teko">
            Équipe d'Experts
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre équipe est composée de professionnels expérimentés dédiés à votre succès.
          </p>
        </div>

        {members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div 
                key={member.id}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Link to={`/detail/${member.id}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                    {/* Image avec effet hover */}
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Badge d'état */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Disponible
                        </span>
                      </div>
                      
                      {/* Social icons on hover */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        {socialIcons.map((social) => {
                          const Icon = social.component;
                          const socialUrl = member[social.name];
                          return socialUrl ? (
                            <a 
                              key={social.name}
                              href={socialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                              aria-label={`${member.name} sur ${social.name}`}
                            >
                              <Icon className="w-4 h-4" />
                            </a>
                          ) : null;
                        })}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm line-clamp-2">{member.description}</p>
                      </div>
                      
                      {/* Contact info (visible au hover) */}
                      <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center text-gray-600 hover:text-orange-500 text-sm transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </a>
                      </div>

                      {/* Voir le profil button */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors">
                          <span>Voir le profil</span>
                          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Chargement de l'équipe...</p>
          </div>
        )}

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-12">
          {[
            { value: '15+', label: 'Années d\'Expérience' },
            { value: '100+', label: 'Projets Réalisés' },
            { value: '50+', label: 'Clients Satisfaits' },
            { value: '10+', label: 'Expertises' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Voir toute l'équipe */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            to="/#team"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users className="w-5 h-5 mr-2" />
            Découvrir toute notre équipe
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          
          {/* Texte d'accompagnement */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Chaque membre de notre équipe apporte une expertise unique et un engagement profond 
            pour garantir le succès de vos projets. Cliquez sur un profil pour en savoir plus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;