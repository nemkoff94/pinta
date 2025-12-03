import React, {useEffect, useState} from 'react'

export default function Menu(){
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch('/api/menu').then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">Меню паба</h2>
      <ul className="mt-4 space-y-3">
        {items.map(it=> (
          <li key={it.id} className="flex justify-between border-b py-2">
            <div>{it.name}</div>
            <div className="text-slate-600">{it.price} ₽</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
