// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content } from './features/layout/components/Content'
import { Props } from './features/layout/components/Props'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
