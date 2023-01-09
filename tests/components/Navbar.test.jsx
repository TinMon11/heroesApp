const { screen, render, fireEvent } = require("@testing-library/react");
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { Navbar } from "../../src/ui";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe("Testing on Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Juan Carlos",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar nombre del usuario logueado", () => {

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Juan Carlos")).toBeTruthy();
  });

  test("Debe llamar LogOut y Navigate cuando se clickea LogOut", () => {

    render(
        <MemoryRouter initialEntries={["/marvel"]}>
          <AuthContext.Provider value={contextValue}>
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );

      const logoutBtn = screen.getByRole('button')
      fireEvent.click(logoutBtn);

      expect(contextValue.logout).toHaveBeenCalled();
      expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})

  });
});
