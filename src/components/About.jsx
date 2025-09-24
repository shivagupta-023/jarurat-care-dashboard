import React from 'react';

const AboutPage = () => {
  return (
    // Main container for the page with animation
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-slide-down">
      
      {/* === Intro Section === */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          About Jarurat Care
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg">
          Welcome to Jarurat Care's Patient Dashboard project. This application is a comprehensive demonstration of modern web development practices, created to solve a real-world problem with a clean and efficient user interface.
        </p>
      </section>

      {/* === Our Mission Section === */}
      <section className="mt-16 text-left">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">
          Our Mission
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Our primary mission is to showcase the ability to build functional, responsive, and user-friendly interfaces. We aim to prove our skills in fetching data from APIs, managing application state effectively, and implementing core features like real-time search and dynamic content display. This project reflects a commitment to writing clean, maintainable code and providing an excellent user experience.
        </p>
      </section>

      {/* === Technology Stack Section === */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-600">React</h3>
            <p className="text-slate-500">UI Library</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-sky-500">Tailwind CSS</h3>
            <p className="text-slate-500">Styling Framework</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-yellow-500">Vite</h3>
            <p className="text-slate-500">Build Tool</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-purple-600">React Router</h3>
            <p className="text-slate-500">Page Navigation</p>
          </div>
        </div>
      </section>

      {/* === Contact Section === */}
      <section className="mt-16 border-t pt-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto bg-slate-100 p-8 rounded-lg">
          <p className="text-center text-slate-600 mb-6">
            If you have any questions or would like to discuss this project further, please feel free to reach out.
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="text-xl mr-4">📧</span>
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                your.email@example.com
              </a>
            </p>
            <p className="flex items-center">
              <span className="text-xl mr-4">📞</span>
              <span className="text-slate-800">+91 98765 43210</span>
            </p>
            <p className="flex items-center">
              <span className="text-xl mr-4">📍</span>
              <span className="text-slate-800">New Delhi, India</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;