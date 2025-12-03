import React from 'react'

export default function Landing(){
  return (
    <section>
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">Добро пожаловать в паб «Пинта»</h2>
        <p className="mt-3 text-slate-600">Современный паб с хорошим пивом и вкусной едой. Откройте для себя меню, события и место для встреч.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded">Атмосфера</div>
          <div className="p-4 border rounded">События</div>
          <div className="p-4 border rounded">Меню</div>
        </div>
      </div>
    </section>
  )
}
