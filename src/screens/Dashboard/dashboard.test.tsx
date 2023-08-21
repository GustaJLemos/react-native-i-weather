import { mockWeatherAPIResponse } from '@__tests__/mocks/mockWeatherAPIResponse';
import { render, waitFor, screen, waitForElementToBeRemoved, act, fireEvent } from '@__tests__/utils/customRender';
import { api } from '@services/api';
import { Dashboard } from './index';
import { saveStorageCity } from '@libs/asyncStorage/cityStorage';
import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse';

describe('Screen: Dashboard', () => {
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    const city = { id: '1', name: 'Ponta Grossa', latitude: 456, longitude: 123 }

    await saveStorageCity(city);

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/ponta grossa/i))

    expect(cityName).toBeTruthy()
  })

  it('should be show another selected weather city', async () => {
    const city = { id: '1', name: 'Rio do SUl, BR', latitude: 456, longitude: 123 }

    await saveStorageCity(city);

    // assim eu faço retornar um payload pra cada requisição, ou seja, primeira chamada de get, esse payload, dps outros... assim vai
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    const { debug } = render(<Dashboard />);
    // quando selecionamos outra cidade ele começa o loading, então vamos esperar ele sair da tela pra continuar

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = 'Ponta Grossa'

    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input');

      fireEvent.changeText(search, cityName);
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }));
    }))
    debug();

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  })
})