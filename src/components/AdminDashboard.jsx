import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [content, setContent] = useState([]);
  const [selectedPage, setSelectedPage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification optionnelle de l'authentification admin
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    axios.get('http://localhost:5000/api/content') 
      .then(res => {
        setContent(res.data);
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
  }, [navigate]);

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

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-50 font-creato text-zinc-500 text-sm">
        Chargement des données...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 font-creato antialiased min-h-screen bg-white">
      {/* En-tête admin */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-zinc-200">
        <div>
          <span className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-2 inline-block text-[#D4AF37]">
            Sécurité & Gestion
          </span>
          <h1 className="font-creato text-3xl md:text-4xl font-normal text-zinc-900 tracking-tight">
            Panneau d'Administration
          </h1>
        </div>
        <button 
          onClick={handleLogout}
          className="self-start sm:self-auto bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-5 py-2.5 rounded-xl uppercase tracking-[0.15em] text-[10px] font-bold transition-all border border-zinc-200"
        >
          Déconnexion
        </button>
      </div>

      {/* SÉLECTEUR DE PAGE */}
      <div className="mb-10 bg-zinc-50/50 p-6 rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3">
          Choisir la page à modifier :
        </label>
        <select 
          className="w-full p-3.5 border border-zinc-200/80 rounded-xl bg-white text-zinc-900 uppercase tracking-widest text-xs font-bold focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer shadow-sm"
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          {uniquePages.map(page => <option key={page} value={page}>{page}</option>)}
        </select>
      </div>

      {/* AFFICHAGE DU CONTENU */}
      <div className="bg-zinc-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200/80">
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#D4AF37] border-b border-zinc-200/80 pb-3 flex items-center gap-2">
          <span>Contenu :</span> 
          <span className="text-zinc-900">{selectedPage}</span>
        </h2> 
        
        <div className="space-y-6">
          {content
            .filter(item => item.page_name === selectedPage)
            .map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-sm transition-all hover:border-zinc-300">
                <label className="block text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-2">
                  Section: <span className="text-zinc-800">{item.section_name}</span> | <span className="text-[#D4AF37]">{item.item_key}</span>
                </label>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <textarea 
                    className="w-full border border-zinc-200/80 p-3.5 rounded-xl text-sm focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all bg-zinc-50/50 text-zinc-800 leading-relaxed font-sans"
                    rows="3"
                    value={item.content}
                    onChange={(e) => handleLocalChange(item.id, e.target.value)}
                  />
                  <button 
                    onClick={() => handleUpdate(item.id, item.content)}
                    className="w-full md:w-auto bg-[#111111] text-white px-6 py-3.5 rounded-xl uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#D4AF37] transition-all duration-300 shadow-md shrink-0 active:scale-[0.98]"
                  >
                    Valider
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;