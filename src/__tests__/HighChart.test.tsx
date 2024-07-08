import { render } from '@testing-library/react';
import React from 'react';

import HighChart from '../app/components/graph/HighChart';

describe('HighChart', () => {
  const mockProps = {
    labelIndex: 0,
    labels: ['総人口'],
    prefPopulationDatas: [
      {
        prefName: '東京都',
        data: [
          {
            label: '総人口',
            data: [
              { year: 2000, value: 12000000 },
              { year: 2005, value: 13000000 },
            ],
          },
        ],
      },
    ],
  };

  it('renders without crashing', () => {
    const { getByText } = render(<HighChart {...mockProps} />);
    expect(getByText('総人口推移')).toBeInTheDocument();
  });
});
