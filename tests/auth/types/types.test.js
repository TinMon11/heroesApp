import { types } from "../../../src/auth/types/types"

describe('Pruebas en TYPES', () => {

    test('Debe regresar los types definidos', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })

})


//  login: '[Auth] Login',
//     logout: '[Auth] Logout'