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
    <header className="p-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex gap-4 items-center">
        <h1 className="text-xl font-semibold">Pinta</h1>
        <nav className="ml-auto flex gap-3 items-center">
          <Link to="/" className="text-sky-600">Лендинг</Link>
          <Link to="/menu" className="text-sky-600">Меню</Link>
          {!user && <Link to="/auth" className="text-sky-600">Войти</Link>}
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-slate-600">{user.username} ({user.role})</span>
              <button className="text-sm text-red-600" onClick={()=>logout()}>Выйти</button>
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
        <main className="max-w-4xl mx-auto p-6">
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
