import { render } from '@testing-library/react';
import React from 'react';

import PopulationGraph from '../../../../app/components/graph/PopulationGraph';

describe('PopulationGraph', () => {
  const mockProps = {
    labelIndex: 0,
    labels: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
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
    const { getByText } = render(<PopulationGraph {...mockProps} />);
    expect(getByText('総人口推移')).toBeInTheDocument();
  });
});
