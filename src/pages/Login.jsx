import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (pass === "?idluxe_2026?") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <input 
        type="password" 
        className="border p-2"
        placeholder="Mot de passe admin"
        onChange={(e) => setPass(e.target.value)} 
      />
      <button onClick={handleLogin} className="ml-2 bg-black text-white p-2">Connexion</button>
    </div>
  );
};

export default Login;