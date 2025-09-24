import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-6 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jarurat Care. All Rights Reserved.</p>
        <p className="text-slate-400 text-sm mt-2">
          Made with ❤️ for the Internship Assignment
        </p>
      </div>
    </footer>
  );
};

export default Footer;