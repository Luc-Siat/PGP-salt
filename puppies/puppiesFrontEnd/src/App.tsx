import './App.css'
import { Home } from './pages/Home'
import {  PuppiesProvider } from './context/PuppiesContext';


function App() {

  return (

    <PuppiesProvider>
      <Home />
    </PuppiesProvider>
  )
}

export default App
