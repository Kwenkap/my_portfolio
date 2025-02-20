// components/Header.js
import React from 'react';
import hero from '../image/hero.png'


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
          <ul className="flex space-x-8">
            {['Home', 'Competences', 'Contact'].map(item => (
              <li key={item}>
                <a href={item} className="block py-2 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
