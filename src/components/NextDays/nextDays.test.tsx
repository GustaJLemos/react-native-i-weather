import { render, screen } from "@testing-library/react-native";
import { NextDays } from "./index";

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render days', () => {
    render(
      <NextDays
        data={[
          { day: '18/07', min: '30°C', max: '34°C', icon: clearDay, weather: 'Céu limpo' },
          { day: '19/07', min: '24°C', max: '31°C', icon: clearDay, weather: 'Nublado' },
          { day: '29/07', min: '28°C', max: '33°C', icon: clearDay, weather: 'Chuva' },
          { day: '14/07', min: '21°C', max: '33°C', icon: clearDay, weather: 'Céu limpo' },
          { day: '21/07', min: '19°C', max: '29°C', icon: clearDay, weather: 'Pouca chuva' },
        ]}
      />
    )

    expect(screen.getByText('14/07')).toBeTruthy();
  });
});