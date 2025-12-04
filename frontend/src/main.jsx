import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import AuthScreens from './pages/AuthScreens'
import Admin from './pages/Admin'
import Cashier from './pages/Cashier'
import Client from './pages/Client'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider, useAuth } from './context/AuthContext'

function Header(){
  const { user, logout } = useAuth()
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-sky-600 text-white rounded-full font-bold">P</div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Pinta</h1>
        </div>

        <nav className="ml-auto flex items-center gap-6">
          <Link to="/" className="text-slate-700 hover:text-sky-600 transition">Лендинг</Link>
          <Link to="/menu" className="text-slate-700 hover:text-sky-600 transition">Меню</Link>
          {!user && <Link to="/auth" className="px-3 py-1 rounded-md bg-sky-50 text-sky-600 hover:bg-sky-100 transition">Войти</Link>}
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-slate-600 text-sm">{user.username} <span className="text-xs text-slate-400">({user.role})</span></span>
              <button className="px-3 py-1 rounded-md text-sm bg-red-50 text-red-600 hover:bg-red-100 transition" onClick={()=>logout()}>Выйти</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/auth" element={<AuthScreens/>} />

            <Route path="/admin" element={<ProtectedRoute role="admin"><Admin/></ProtectedRoute>} />
            <Route path="/cashier" element={<ProtectedRoute role="cashier"><Cashier/></ProtectedRoute>} />
            <Route path="/client" element={<ProtectedRoute role="client"><Client/></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
