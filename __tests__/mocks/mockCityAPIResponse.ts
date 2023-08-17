import { CityAPIResponse } from '@services/getCityByNameService'

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'Ponta Grossa',
  sys: {
    country: 'BR'
  },
  coord: {
    lat: 123,
    lon: 456
  }
};