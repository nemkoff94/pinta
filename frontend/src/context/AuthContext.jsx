import React, {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext(null)

export function AuthProvider({children}){
  const [user, setUser] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem('pinta_auth')) || null
    }catch(e){ return null }
  })

  useEffect(()=>{
    if(user) localStorage.setItem('pinta_auth', JSON.stringify(user))
    else localStorage.removeItem('pinta_auth')
  },[user])

  const login = (payload) => {
    // payload expected: { role, username, token }
    setUser(payload)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
