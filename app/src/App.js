import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TestingPage } from './pages/TestingPage'
import { CabinetPage } from './pages/CabinetPage'
import { BussDurkee } from './pages/TestingPage/BussDurkee'
import { Rusalov } from './pages/TestingPage/Rusalov'
import { Cattel } from './pages/TestingPage/Cattel'
import { Pantileev } from './pages/TestingPage/Pantileev'
import { KOT } from './pages/TestingPage/KOT'
import { Vark } from './pages/TestingPage/Vark'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cabinet' element={<CabinetPage />} />
        <Route path='/testing' element={<TestingPage />} />
        <Route path='/testing/buss-durkee' element={<BussDurkee />} />
        <Route path='/testing/rusalov' element={<Rusalov />} />
        <Route path='/testing/cattel' element={<Cattel />} />
        <Route path='/testing/pantileev' element={<Pantileev />} />
        <Route path='/testing/kot' element={<KOT />} />
        <Route path='/testing/vark' element={<Vark />} />
      </Routes>
    </HashRouter>
  )
}

export default App
