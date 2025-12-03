import React, {useState} from 'react'

export default function AuthScreens(){
  const [role,setRole]=useState('client')
  const [username,setUsername]=useState('')
  const [info,setInfo]=useState(null)

  const login = async ()=>{
    try{
      const r = await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({role,username})})
      const j = await r.json()
      setInfo(j)
    }catch(e){ setInfo({error:'Network'}) }
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
      <button className="bg-sky-600 text-white px-4 py-2 rounded" onClick={login}>Войти</button>
      {info && <pre className="bg-slate-50 p-3 border">{JSON.stringify(info,null,2)}</pre>}
      <div className="text-sm text-slate-500">После входа появятся заглушки экранов для выбранной роли.</div>
    </div>
  )
}
