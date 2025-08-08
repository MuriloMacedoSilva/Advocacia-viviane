import { useState } from 'react'
import Inicio from "../src/components/Inicio.jsx"
import Header from "../src/components/Header.jsx"
import backgroundMobile from "./assets/backgroundMobile.png"
import backgroundInicio from "./assets/backgroundInicio.png"
import Avaliation from './components/Avaliation.jsx'


function App() {
  return (
    <div>
      <img src={backgroundMobile} alt="fundo imagem de prédios" className="absolute top-0 w-screen left-0 z-[-2] md:opacity-0" />
            <img src={backgroundInicio} alt="fundo prédios" className="absolute top-0 w-screen md:h-full xl:h-auto left-0 z-[-2] md:opacity-100 opacity-0" />
      < Header />
      < Inicio />
      < Avaliation />
    </div>
  )
}

export default App;
