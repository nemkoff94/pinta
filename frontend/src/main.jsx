import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import AuthScreens from './pages/AuthScreens'

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <header className="p-4 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto flex gap-4 items-center">
            <h1 className="text-xl font-semibold">Pinta</h1>
            <nav className="ml-auto flex gap-3">
              <Link to="/" className="text-sky-600">Лендинг</Link>
              <Link to="/menu" className="text-sky-600">Меню</Link>
              <Link to="/auth" className="text-sky-600">Войти</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/auth" element={<AuthScreens/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
