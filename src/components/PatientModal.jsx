import React from 'react';

const PatientModal = ({ patient, onClose }) => {
  return (
    // Backdrop: Modal ke bahar ka hissa, click karne par band hoga
    <div 
      className="fixed inset-0 flex justify-center items-center z-[1000] p-4 sm:p-6 
                 bg-slate-700 bg-opacity-30 backdrop-blur-sm" // <<<--- Ye line badli hai
      onClick={onClose}
    >
      {/* Modal Content: Main box jismein details hain */}
      <div 
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg relative animate-slide-down transform scale-95 sm:scale-100" // Bigger shadow, rounded corners, animation
        onClick={(e) => e.stopPropagation()} // Isse modal ke andar click karne par modal band nahi hoga
      >
        {/* Close Button: Upari right corner mein */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 text-3xl font-light leading-none" 
          onClick={onClose}
          aria-label="Close" // Accessibility ke liye
        >
          &times;
        </button>

        {/* Modal Header: Patient ka naam */}
        <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
          <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold">
            {patient.name.charAt(0)}
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">{patient.name}</h2>
        </div>

        {/* Patient Details: Icons ke saath */}
        <div className="space-y-4 text-left">
          {/* ID */}
          <div className="flex items-center text-lg text-slate-700">
            <span className="text-blue-500 w-8 h-8 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </span>
            <strong className="min-w-[80px]">ID:</strong> <span>{patient.id}</span>
          </div>

          {/* Age */}
          <div className="flex items-center text-lg text-slate-700">
            <span className="text-blue-500 w-8 h-8 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <strong className="min-w-[80px]">Age:</strong> <span>{patient.age} years</span>
          </div>

          {/* Contact */}
          <div className="flex items-center text-lg text-slate-700">
            <span className="text-blue-500 w-8 h-8 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
            </span>
            <strong className="min-w-[80px]">Contact:</strong> <span>{patient.contact}</span>
          </div>

          {/* Email */}
          <div className="flex items-center text-lg text-slate-700">
            <span className="text-blue-500 w-8 h-8 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" /></svg>
            </span>
            <strong className="min-w-[80px]">Email:</strong> <span>{patient.email}</span>
          </div>

          {/* City */}
          <div className="flex items-center text-lg text-slate-700">
            <span className="text-blue-500 w-8 h-8 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <strong className="min-w-[80px]">City:</strong> <span>{patient.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;