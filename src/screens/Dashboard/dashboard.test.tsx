import { mockWeatherAPIResponse } from '@__tests__/mocks/mockWeatherAPIResponse';
import { render, waitFor, screen } from '@__tests__/utils/customRender';
import { api } from '@services/api';
import { Dashboard } from './index';
import { saveStorageCity } from '@libs/asyncStorage/cityStorage';

describe('Screen: Dashboard', () => {
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    const city = { id: '1', name: 'Ponta Grossa', latitude: 456, longitude: 123 }

    await saveStorageCity(city);

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/ponta grossa/i))

    expect(cityName).toBeTruthy()
  })
})