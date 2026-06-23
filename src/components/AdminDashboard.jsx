import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/content') 
      .then(res => setContent(res.data))
      .catch(err => console.error("Erreur API:", err));
  }, []);

  // Mise à jour locale pour que le champ reste réactif
  const handleLocalChange = (id, newValue) => {
    setContent(prev => prev.map(item => 
      item.id === id ? { ...item, content: newValue } : item
    ));
  };

  const handleUpdate = async (id, val) => {
    try {
      await axios.post('http://localhost:5000/api/content/update', { id, newContent: val });
      console.log("Enregistré !");
    } catch (err) {
      alert("Erreur lors de l'enregistrement");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 font-sans min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Panneau d'Administration</h1>
      
      {['values', 'advantages'].map(section => (
        <div key={section} className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold uppercase mb-4 text-[#D4AF37] tracking-wider">{section}</h2>
          
          {content
            .filter(item => item.section_name === section)
            .map((item) => (
              <div key={item.id} className="mb-4">
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-1">
                  {item.item_key}
                </label>
                <textarea 
                  className="w-full border border-gray-200 p-3 rounded focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  rows="3"
                  value={item.content} // État contrôlé
                  onChange={(e) => handleLocalChange(item.id, e.target.value)}
                  onBlur={(e) => handleUpdate(item.id, e.target.value)}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;