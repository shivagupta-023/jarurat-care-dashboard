import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy'; // 1. Hook ko import karein

const Header = ({ onNavLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Hook ka istemal karke active section ID prapt karein
  const activeSection = useScrollSpy(['patients', 'about']);

  // Mobile menu ke link par click karne ke liye function
  const handleMobileLinkClick = (sectionId) => {
    onNavLinkClick(sectionId);
    setIsMenuOpen(false); // Menu band kar do
  };

  const commonClasses = "font-semibold transition duration-300 py-2 cursor-pointer";
  const activeClasses = "text-blue-600 border-b-2 border-blue-600";
  const inactiveClasses = "text-gray-600 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Jarurat Care 🏥</h1>
        
        {/* === Desktop Menu === */}
        <nav className="hidden md:flex space-x-8">
          <a 
            onClick={() => onNavLinkClick('patients')}
            className={`${commonClasses} ${activeSection === 'patients' ? activeClasses : inactiveClasses}`}
          >
            Patients
          </a>
          <a 
            onClick={() => onNavLinkClick('about')}
            className={`${commonClasses} ${activeSection === 'about' ? activeClasses : inactiveClasses}`}
          >
            About
          </a>
        </nav>

        {/* === Hamburger Button === */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* === Mobile Menu Panel === */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <a onClick={() => handleMobileLinkClick('patients')} className="block text-center py-3 px-4 text-gray-700 hover:bg-blue-50">Patients</a>
          <a onClick={() => handleMobileLinkClick('about')} className="block text-center py-3 px-4 text-gray-700 hover:bg-blue-50">About</a>
        </div>
      )}
    </header>
  );
};

export default Header;