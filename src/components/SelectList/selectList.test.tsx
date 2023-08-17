import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "./index";

describe('Component: SelectList', () => {
  it('Should be return city details selected', () => {
    const data = [
      { id: '1', name: 'Ponta Grossa', latitude: 456, longitude: 123 },
      { id: '2', name: 'Irati', latitude: 123, longitude: 456 },
      { id: '3', name: 'Campo Grande', latitude: 123, longitude: 456 }
    ]

    // onPress = função do jest
    // aq estamos criando um mock da função de onPress
    const onPress = jest.fn();

    const { debug } = render(
      <SelectList
        data={data}
        onChange={() => { }}
        onPress={onPress}
      />
    )

    debug();

    // vai procurar por um texto exatamente igual ao q eu passei na função, dentro do meu componente
    // o texto é case sensitive
    // posso usar regex /Campo/ procura essa palavra tanto no começo quanto no final, a letra i dps, faz com q a gente ignore o case sensitive
    const selectedCity = screen.getByText(/campo/i);
    // podemos usar dessa forma tbm, q funciona
    // const selectedCity = screen.getByText('Campo', { exact: false });
    console.log(selectedCity)

    // podemos simular o toque na opção com o fireEvent
    fireEvent.press(selectedCity);

    // quero saber se a função de onPress foi chamada pelo menos uma vez
    expect(onPress).toBeCalledTimes(1)
    // verificando se o onPress foi chamado com o terceiro item selecionado, ou seja campo grande
    expect(onPress).toBeCalledWith(data[2])
  });

  it('not should be show options when data props is empty', () => {
    render(
      <SelectList
        data={[]}
        onChange={() => { }}
        onPress={() => { }}
      />
    )

    const options = screen.getByTestId('options');
    // vai mostrar um array vazio pq n tem nenhuma opção para exibir
    console.log(options.children)
    expect(options.children).toHaveLength(0);
  });
});