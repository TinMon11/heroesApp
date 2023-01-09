import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("¨Pruebas en AppRouter", () => {
  test("Debe mostrar login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Login")).toBeTruthy();
  });

  test("Debe mostrar componente de Marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id:'ABC',
        name: 'Juan Carlos'
      }
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1)

    
  });
});
