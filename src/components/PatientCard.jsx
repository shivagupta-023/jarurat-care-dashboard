import React from 'react';

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      <div className="p-6 text-center">
        <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
          {patient.name.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{patient.name}</h3>
      </div>
      <div className="px-6 pb-4 flex-grow">
        <p className="text-slate-600"><span className="font-semibold">Age:</span> {patient.age}</p>
        <p className="text-slate-600"><span className="font-semibold">Contact:</span> {patient.contact}</p>
      </div>
      <div className="bg-slate-50 p-4">
        <button 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-blue-700"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PatientCard;