import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PopulationTypeRadioInput from '../app/components/common/PopulationTypeRadioInput';

describe('PopulationTypeRadioInput', () => {
  const mockProps = {
    defaultChecked: false,
    index: 0,
    label: '総人口',
    onChange: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByLabelText } = render(<PopulationTypeRadioInput {...mockProps} />);
    expect(getByLabelText('総人口')).toBeInTheDocument();
  });

  it('calls onChange when radio button is clicked', () => {
    const { getByLabelText } = render(<PopulationTypeRadioInput {...mockProps} />);
    fireEvent.click(getByLabelText('総人口'));
    expect(mockProps.onChange).toHaveBeenCalledWith(0);
  });
});
