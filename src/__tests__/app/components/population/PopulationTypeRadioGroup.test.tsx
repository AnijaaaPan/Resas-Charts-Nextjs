import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PopulationTypeRadioGroup from '../../../../app/components/population/PopulationTypeRadioGroup';

describe('PopulationTypeRadioGroup', () => {
  const mockProps = {
    labels: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
    onChange: jest.fn(),
  };

  it('renders radio buttons for each population type', () => {
    const { getByLabelText } = render(<PopulationTypeRadioGroup {...mockProps} />);
    expect(getByLabelText('総人口')).toBeInTheDocument();
    expect(getByLabelText('年少人口')).toBeInTheDocument();
  });

  it('calls onChange when a radio button is clicked', () => {
    const { getByLabelText } = render(<PopulationTypeRadioGroup {...mockProps} />);
    fireEvent.click(getByLabelText('年少人口'));
    expect(mockProps.onChange).toHaveBeenCalledWith(1);
  });
});
