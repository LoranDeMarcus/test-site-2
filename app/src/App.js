import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TestingPage } from './pages/TestingPage'
import { CabinetPage } from './pages/CabinetPage'
import { BussDurkee } from './pages/TestingPage/BussDurkee'
import { SecondTest } from './pages/TestingPage/SecondTest'
import { ThirdTest } from './pages/TestingPage/ThirdTest'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cabinet' element={<CabinetPage />} />
        <Route path='/testing' element={<TestingPage />} />
        <Route path='/testing/buss-durkee' element={<BussDurkee />} />
        <Route path='/testing/2' element={<SecondTest />} />
        <Route path='/testing/3' element={<ThirdTest />} />
      </Routes>
    </HashRouter>
  )
}

export default App
