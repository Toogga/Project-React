import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Accueil from './components/Accueil.jsx'
import Gameplay from './components/gameplay.jsx'
import './index.css'
import Salon from './components/salon.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Gameplay />
    <Salon />
  </React.StrictMode>,
)