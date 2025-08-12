import { useState } from 'react'
import Inicio from "../src/components/Inicio.jsx"
import Header from "../src/components/Header.jsx"
import Avaliation from './components/Avaliation.jsx'
import Sobre from "./components/Sobre.jsx"
import Topics from "./components/Topics.jsx"
import background2 from "./assets/background2.png"
import Servicos from "./components/Servicos.jsx";
import Frase from "./components/Frase.jsx"
import Footer from "./components/Footer.jsx"
import background2_mobile from "./assets/background2_mobile.png"


function App() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden bg-transparent scroll-smooth'>
      < Header />
      < Inicio />
      <img src={background2} alt="" className='z-[-1] absolute w-screen hidden lg:block' />
      <img src={background2_mobile} alt="" className='z-[-1] absolute h-[2200px] w-screen block lg:hidden' />
      < Frase />
      < Topics />
      < Sobre />
      < Servicos />
      < Footer />
    </div>
  )
}

export default App;
