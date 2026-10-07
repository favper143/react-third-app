import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hello from './pages/Hello'
import Home from './pages/Home'
import Hi from './pages/Hi'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/wow/woo/hi" element={<Hi />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}
