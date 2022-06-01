import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { Testing } from './pages/testing'
import { Cabinet } from './pages/cabinet'
import { BussDurkee } from './pages/testing/BussDurkee'
import { Rusalov } from './pages/testing/Rusalov'
import { Cattel } from './pages/testing/Cattel'
import { Pantileev } from './pages/testing/Pantileev'
import { KOT } from './pages/testing/KOT'
import { Vark } from './pages/testing/Vark'
import Header from './components/Header'

// todo: добавить описание в Pantileev

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cabinet' element={<Cabinet />} />
        <Route path='/testing' element={<Testing />} />
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
