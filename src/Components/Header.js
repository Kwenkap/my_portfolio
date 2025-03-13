// components/Header.js
import React from 'react';
import hero from '../image/hero.jpg'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';import Slider from 'react-slick'; // Importation de Slider pour le carrousel



const Header = () => {
  return (
<header>
    <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
        <img class="w-10 h-10 rounded-full" src={hero} alt="Rounded avatar" />          
        <span className="text-xl px-2 font-semibold dark:text-white"> Portfolio</span>
        </a>
        <div className="flex items-center">
          
          <button className="p-2 text-gray-500 rounded-lg lg:hidden" aria-controls="mobile-menu">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5h12a1 1 0 110 2H3a1 1 0 110-2zm0 5h12a1 1 0 110 2H3a1 1 0 110-2zm0 5h12a1 1 0 110 2H3a1 1 0 110-2z" /></svg>
          </button>
        </div>
        <div className="hidden lg:flex">
           {/* Email */}
              <a
                href="mailto:kwenkaphermann@gmail.com"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-blue-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
                aria-label="Envoyer un email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
          
              {/* Téléphone (WhatsApp) */}
              <a
                href="https://wa.me//+237690828692"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-green-500 text-green-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
                aria-label="Contacter via WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
          
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gilles-hermann-kwenkap-dinang-a2730a350/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-blue-600 text-blue-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
                aria-label="Visiter mon profil LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
          
              {/* GitHub (optionnel) */}
              <a
                href="https://github.com/Kwenkap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-4 m-2 transition-all duration-300 shadow-lg hover:shadow-gray-700/50 transform hover:scale-105 transition-transform duration-300" // Ajout de transform et transition-transform
                aria-label="Visiter mon profil GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
