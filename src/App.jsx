import { useState } from 'react'
import Inicio from "../src/components/Inicio.jsx"
import Header from "../src/components/Header.jsx"
import Avaliation from './components/Avaliation.jsx'
import Sobre from "./components/Sobre.jsx"
import Topics from "./components/Topics.jsx"
import background2 from "./assets/background2.png"
import Servicos from "./components/Servicos.jsx";


function App() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden bg-transparent'>
      < Header />
      < Inicio />
      <img src={background2} alt="" className='z-[-1] absolute w-screen h-[1500px]' />
      < Avaliation />
      < Topics />
      < Sobre />
      < Servicos />
    </div>
  )
}

export default App;
