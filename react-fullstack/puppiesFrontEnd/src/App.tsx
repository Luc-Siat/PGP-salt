import { useState, useContext } from 'react'

import './App.css'
import { Home } from './pages/Home'
import { createContext } from 'vm'
import { getEnvironmentData } from 'worker_threads'


function App() {

  const getData = () => {

  }

  useEffect(() => {
    getData();
  }, [])

  const PuppiesContext = createContext([]);

  return (
    <>
      <PuppiesContext.Provider value="">
      <Home />
      </PuppiesContext.Provider>
    </>
  )
}

export default App
