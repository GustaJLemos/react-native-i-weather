import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe('Context: CityContext', () => {
  it('should be change selected city', async () => {
    // pra usarmos esse contexto na nossa aplicação precisamos passar o Provedor dele
    // parea isso usamos o wrapper
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    // quando temos atualizações de estado (como é o caso do nosso hook) primeiro precisamos colcoar o async
    // ai utilizamos o waitFor e uma ação (act) se colocarmos a nossa função q atuzalia o estado dessa forma, ela funciona

    // waitFor lidamos com o assincronismo, e o act com a atualização de estado que temos lá dentro
    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'Ponta Grossa',
      latitude: 123,
      longitude: 456
    })));

    expect(result.current.city?.name).toBe('Ponta Grossa');
  })
});