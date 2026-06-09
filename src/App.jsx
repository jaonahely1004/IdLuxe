import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Presentation from "./components/Presentation"
import About from "./components/About"
import Methodology from "./components/Methodology"
import Services from "./components/Services"
import Engagements from "./components/Engagements"
import Realisations from "./components/Realisations"
import Footer from "./components/Footer"
import TunnelDevis from "./components/TunnelDevis"

function App() {
  const [isDevisOpen, setIsDevisOpen] = useState(false);

  return (
    <div className="bg-[#FBFBFA] text-zinc-900 overflow-hidden font-sans selection:bg-[#D4AF37]/30 relative">
      
      {/* Injection de la commande de contrôle dans la Navbar */}
      <Navbar onOpenDevis={() => setIsDevisOpen(true)} />
      
      <Hero />
      <Presentation/>
      <Methodology />
      <About />
      <Services />
      <Engagements />
      <Realisations />
      <Footer />

      {/* Rendu dynamique du pop-up isolé en calque d'overlay global */}
      {isDevisOpen && (
        <TunnelDevis onClose={() => setIsDevisOpen(false)} />
      )}
      
    </div>
  )
}

export default App;