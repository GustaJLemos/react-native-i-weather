import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

const newCity: CityProps = {
  id: '1',
  name: 'Ponta Grossa',
  latitude: 123,
  longitude: 456
}

describe('Storage: CityStorage', () => {
  it('should be return null when dont have a city storaged', async () => {
    const response = await getStorageCity();
    console.log(response);

    expect(response).toBeNull();
  });

  it('should be return city storaged', async () => {


    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it('should be remove city storage', async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  })
});