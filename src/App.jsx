import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PatientsPage from './components/PatientsPage';
import About from './components/About';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('patients');

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col">
      <Header 
        activeSection={activeSection} 
        onNavLinkClick={handleNavLinkClick} 
      />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* scroll-mt-20 header ki height ke liye margin deta hai */}
        <section id="patients" className="scroll-mt-20">
          <PatientsPage />
        </section>
        <section id="about" className="mt-20 scroll-mt-20">
          <About />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;