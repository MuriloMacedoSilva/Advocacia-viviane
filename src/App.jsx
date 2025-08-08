import { useState } from 'react'
import Inicio from "../src/components/Inicio.jsx"
import Header from "../src/components/Header.jsx"
import backgroundMobile from "./assets/backgroundMobile.png"
import backgroundInicio from "./assets/backgroundInicio.png"
import Avaliation from './components/Avaliation.jsx'


function App() {
  return (
    <div className='overflow-x-hidden'>
      < Header />
      < Inicio />
      < Avaliation />
    </div>
  )
}

export default App;
