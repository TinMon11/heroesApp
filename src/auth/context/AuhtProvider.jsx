import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'


// const initialState = {
//     logged:false
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user
  }

}

export const AuhtProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (name = "") => {

    const user = { id: "ABC", name: name }
    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')

    const action = {
      type: types.logout,
      payload: {}
    }

    dispatch(action)
  }


  return (
    <AuthContext.Provider value={{
      //Atributos
      ...authState,

      //Metodos
      login: login,
      logout: logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
