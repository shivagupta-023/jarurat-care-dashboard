import React, { useState, useEffect } from 'react';
import PatientCard from './PatientCard';
import PatientModal from './PatientModal';
import Loader from './Loader';

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetching logic (bilkul same rahega)
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const formattedData = data.map(user => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * 40) + 20,
          contact: user.phone.split(' ')[0],
          email: user.email,
          city: user.address.city,
        }));
        setPatients(formattedData);
        setFilteredPatients(formattedData);
      } catch (err) {
        setError('Failed to fetch patient data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);
  
  // Search logic (bilkul same rahega)
  useEffect(() => {
    const results = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(results);
  }, [searchQuery, patients]);

  if (loading) return <Loader />;
  if (error) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">{error}</div>;

  return (
    <div>
      <div className="text-center mb-10">
        <input
          type="text"
          placeholder="Search patients by name..."
          className="w-full max-w-lg p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <PatientCard 
              key={patient.id} 
              patient={patient} 
              onViewDetails={() => setSelectedPatient(patient)} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No patients found.</p>
        )}
      </div>

      {selectedPatient && (
        <PatientModal 
          patient={selectedPatient} 
          onClose={() => setSelectedPatient(null)} 
        />
      )}
    </div>
  );
};

export default PatientsPage;