import { api } from '@services/api';
import { render, waitFor, screen, act } from '../../__tests__/utils/customRender'
import { Routes } from "./index"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockWeatherAPIResponse } from '@__tests__/mocks/mockWeatherAPIResponse';

describe('Routes', () => {
  it('Should be render search screen when not city selected', async () => {
    const { debug } = render(<Routes />)
    debug()

    // esse find vai ficar procurando pra gente o texto até estourar um timeOut
    // pq? pq dentro do nosso componente as coisas rolam assíncronas
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });

  it('should be render dashboard screen when has city selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockWeatherAPIResponse
    })

    const city = {
      id: '1',
      name: 'Ponta Grossa',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(city.name)

    expect(title).toBeTruthy();
  })
})