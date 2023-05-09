import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { IPuppy } from './interfaces/interfaces';
import { PuppiesContext, PuppiesProvider } from './context/PuppiesContext';


function App() {

  return (

    <PuppiesProvider>
      <Home />
    </PuppiesProvider>
  )
}

export default App
