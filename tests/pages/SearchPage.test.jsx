import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe("Pruebas en Search Page", () => {

  beforeEach(()=> jest.clearAllMocks())

  test("Debe mostrarse correctamente con default values", () => {
    
    const {container} = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe mostar Batman y el input con el query string", () => {
    
    
    const {container} = render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );
    
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const imagen = screen.getByRole('img')
    expect(imagen.src).toContain('batman')

    const alert = screen.getByLabelText('alert-danger')
    expect(alert.style.display).toEqual('none')

  });

  test('Debe mostrar error si no se encuentra el Hero (Batman123)', () => { 
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText('alert-danger')
    expect(alert.style.display).toBe('')

   })

   test('Debe llamar el Navigate a la nueva pantalla', () => { 

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}})
    
    const form = screen.getByRole('form')
    fireEvent.submit(form);

      expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')


    })

});
