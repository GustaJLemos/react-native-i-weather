import { render, screen } from "@testing-library/react-native"
import { Day } from "./index"

import clearDay from '@assets/clear_day.svg'

describe('Component: Day', () => {
  it('should be render day', () => {
    // isso aq falha, pq? pq por enquanto nosso teste não sabe SVG, n sabe oq fazer com ele
    // pra resolver isso vamos mockar o svg com o jest-trnsformer-svg
    const { debug } = render(
      <Day
        data={{
          day: '18/07',
          min: '30°C',
          max: '34°C',
          icon: clearDay,
          weather: 'Céu limpo'
        }}
      />
    )

    debug();

    expect(screen.getByText('18/07')).toBeTruthy();
  })
})