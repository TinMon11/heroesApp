import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en Public Route', () => {

    test('Debe mostrar children si no esta autenticado', () => {

        const ContextValue = {
            logged: false,
            user: null
        }

        render(
            <AuthContext.Provider value={ContextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Ruta Publica")).toBeTruthy()
    })

    test('Debe Navegar si está autenticado', () => {

        const ContextValue = {
            logged: true,
            user: {
                name: "Martin",
                id: 3432
            }
        }

        render(
            <AuthContext.Provider value={ContextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>

                        } />
                        <Route path="/marvel" element={<h1>Pagina de Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Pagina de Marvel")).toBeTruthy()

    })

})