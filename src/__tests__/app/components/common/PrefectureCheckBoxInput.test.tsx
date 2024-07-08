import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PrefectureCheckBoxInput from '../../../../app/components/common/PrefectureCheckBoxInput';

describe('PrefectureCheckBoxInput', () => {
  const mockProps = {
    onChange: jest.fn(),
    prefCode: 13,
    prefName: '東京都',
  };

  it('renders correctly', () => {
    const { getByLabelText } = render(<PrefectureCheckBoxInput {...mockProps} />);
    expect(getByLabelText('東京都')).toBeInTheDocument();
  });

  it('calls onChange when checkbox is clicked', () => {
    const { getByLabelText } = render(<PrefectureCheckBoxInput {...mockProps} />);
    fireEvent.click(getByLabelText('東京都'));
    expect(mockProps.onChange).toHaveBeenCalledWith(13, '東京都', true);
  });
});
