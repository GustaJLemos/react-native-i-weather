import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse';
import { api } from './api';
import { getCityByNameService } from './getCityByNameService';

describe('API: getCityByNameService', () => {
  it('should return city details', async () => {

    // importante usarmos o mesmo padrão de resposta q a nossa api iria retornar pra gente
    // o spy on vai ficar observando pra mim as requisições que são feitas para minha APi
    // baicamente oq estamos falando é q se rolar um requisção do tipo get, 
    // pra essa nossa api, a gente vai retrornar nosso dado mockado
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

    const response = await getCityByNameService('Ponta Grossa');
    console.log(response)

    expect(response.length).toBeGreaterThan(0);
  });
});