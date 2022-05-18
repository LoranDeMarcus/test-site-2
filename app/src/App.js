import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TestingPage } from './pages/TestingPage'
import { CabinetPage } from './pages/CabinetPage'
import { BussDurkee } from './pages/TestingPage/BussDurkee'
import { Rusalov } from './pages/TestingPage/Rusalov'
import { Kettel } from './pages/TestingPage/Kettel'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cabinet' element={<CabinetPage />} />
        <Route path='/testing' element={<TestingPage />} />
        <Route path='/testing/buss-durkee' element={<BussDurkee />} />
        <Route path='/testing/rusalov' element={<Rusalov />} />
        <Route path='/testing/kettel' element={<Kettel />} />
      </Routes>
    </HashRouter>
  )
}

export default App
