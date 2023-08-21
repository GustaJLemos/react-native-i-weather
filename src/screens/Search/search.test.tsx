import { render, screen, fireEvent, waitFor } from '@__tests__/utils/customRender'
import { Search } from './index'
import { api } from '@services/api'
import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse'

describe('Screen: Search', () => {
  it('Should be show city option', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })
    render(<Search />)

    const searchInput = screen.getByTestId('search-input')
    fireEvent.changeText(searchInput, 'Ponta Grossa')

    const option = await waitFor(() => screen.findByText(/ponta grossa/i))
    expect(option).toBeTruthy();
  })
})