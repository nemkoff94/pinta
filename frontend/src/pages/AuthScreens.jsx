import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AuthScreens(){
  const [role,setRole]=useState('client')
  const [username,setUsername]=useState('')
  const [error,setError]=useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const doLogin = async ()=>{
    setError(null)
    try{
      const r = await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({role,username})})
      const j = await r.json()
      if(j && j.ok){
        // store into auth context and redirect
        login({ role: j.role, username: j.username || 'guest', token: j.token })
        // redirect to role home
        if(j.role === 'admin') navigate('/admin')
        else if(j.role === 'cashier') navigate('/cashier')
        else navigate('/client')
      }else{
        setError('Invalid response')
      }
    }catch(e){ setError('Network error') }
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow space-y-4">
      <h2 className="text-2xl font-bold">Вход (демо)</h2>
      <input className="border p-2 w-full" placeholder="Имя" value={username} onChange={e=>setUsername(e.target.value)} />
      <select className="border p-2 w-full" value={role} onChange={e=>setRole(e.target.value)}>
        <option value="client">Клиент</option>
        <option value="cashier">Кассир</option>
        <option value="admin">Администратор</option>
      </select>
      <button className="bg-sky-600 text-white px-4 py-2 rounded" onClick={doLogin}>Войти</button>
      {error && <div className="text-red-600">{error}</div>}
      <div className="text-sm text-slate-500">После входа появятся заглушки экранов для выбранной роли.</div>
    </div>
  )
}
