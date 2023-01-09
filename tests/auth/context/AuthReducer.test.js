import { render } from '@testing-library/react'
import { AuthReducer } from '../../../src/auth/context/AuthReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en Auth Reducer', () => {

    test('Debe retornar estado por defecto', () => {
        const state = AuthReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('debe llamar "login" y autenticar/establecer usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: "Juan",
                id: 123
            }
        }

        const state = AuthReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('Con Logout debe borrar nombre, poner logged en false', () => {

        const state = {
            logged: true,
            user: {
                name: "Jose",
                id: 3431
            }
        }

        const action = {
            type: types.logout,
            payload: {}
        }

        const newState = AuthReducer(state, action)
        expect(newState).toEqual({ logged: false })

    })

})