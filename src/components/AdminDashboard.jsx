import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [content, setContent] = useState([]);
  const [selectedPage, setSelectedPage] = useState(''); // Initialisé à vide
  const [loading, setLoading] = useState(true); // Ajout d'un état de chargement

  useEffect(() => {
    axios.get('http://localhost:5000/api/content') 
      .then(res => {
        setContent(res.data);
        //définir la première page disponible dès que les données arrivent
        if (res.data.length > 0) {
          const firstPage = res.data[0].page_name;
          setSelectedPage(firstPage);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur API:", err);
        setLoading(false);
      });
  }, []);

  // Extraire les pages uniques une fois que content n'est plus vide
  const uniquePages = [...new Set(content.map(item => item.page_name))];
  const handleLocalChange = (id, newValue) => {
    setContent(prev => prev.map(item => item.id === id ? { ...item, content: newValue } : item));
  };

  const handleUpdate = async (id, val) => {
    try {
      await axios.post('http://localhost:5000/api/content/update', { id, newContent: val });
      alert("Modification enregistrée !");
    } catch (err) {
      alert("Erreur lors de l'enregistrement");
    }
  };
  if (loading) return <div className="p-10">Chargement des données...</div>;
  return (
    <div className="max-w-4xl mx-auto p-10 font-sans min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Panneau d'Administration</h1>
      {/* SÉLECTEUR DE PAGE */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-2">Choisir la page à modifier :</label>
        <select 
          className="w-full p-3 border rounded-lg bg-gray-50 uppercase tracking-widest font-bold"
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          {uniquePages.map(page => <option key={page} value={page}>{page}</option>)}
        </select>
      </div>
      {/* AFFICHAGE */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold uppercase mb-6 text-[#D4AF37] border-b pb-2">
          Contenu : {selectedPage}
        </h2>       
        {content
          .filter(item => item.page_name === selectedPage)
          .map((item) => (
            <div key={item.id} className="mb-6">
              <label className="block text-xs uppercase text-gray-500 font-bold mb-1">
                Section: {item.section_name} | {item.item_key}
              </label>
              <div className="flex gap-4">
                <textarea 
                  className="w-full border border-gray-200 p-3 rounded focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  rows="2"
                  value={item.content}
                  onChange={(e) => handleLocalChange(item.id, e.target.value)}
                />
                <button 
                  onClick={() => handleUpdate(item.id, item.content)}
                  className="bg-[#111111] text-white px-6 py-2 rounded hover:bg-[#D4AF37] transition-all shrink-0"
                >
                  Valider
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminDashboard;