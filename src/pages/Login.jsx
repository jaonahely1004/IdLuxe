import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault();
    if (pass === "?idluxe_2026?") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 bg-[#FAF8F3] font-creato antialiased">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl border border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-8">
          <span className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-3 inline-block text-[#D4AF37]">
            Administration
          </span>
          <h1 className="font-creato text-2xl md:text-3xl font-normal text-zinc-900 tracking-tight">
            Connexion Admin
          </h1>
          <div className="w-10 h-[2px] mx-auto mt-4 rounded-full bg-[#D4AF37]" />
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">
              Mot de passe
            </label>
            <input 
              type="password" 
              className="w-full border border-zinc-200/80 rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-zinc-50/50"
              placeholder="Entrez le mot de passe admin"
              value={pass}
              onChange={(e) => setPass(e.target.value)} 
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#111111] text-white py-4 rounded-xl uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#D4AF37] transition-all duration-300 shadow-md shadow-zinc-950/10 hover:shadow-xl hover:shadow-zinc-950/20 active:scale-[0.98]"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;