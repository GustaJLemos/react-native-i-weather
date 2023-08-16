import { render, screen } from '@testing-library/react-native';
import { Input } from './index';

describe('Component: Input', () => {
  it('Should be render without activity indicator if isLoading prop is undefined', () => {
    const { debug } = render(<Input />);
    // debug mostra como se fosse um "esqueleto" do nosso componente
    debug();

    // quando utilizamos o get, ele retorna uma excessão caso não encontre o elemento desejado
    // a query ela não retorna excessão quando não encontra, ela retorna null
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();
  })

  it('Should be render with activity indicator if isLoading prop is true', () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  })
});