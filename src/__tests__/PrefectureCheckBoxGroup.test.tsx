import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PrefectureCheckBoxGroup from '../app/components/population/PrefectureCheckBoxGroup';

describe('PrefectureCheckBoxGroup', () => {
  const mockProps = {
    onChange: jest.fn(),
    prefectures: [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 13, prefName: '東京都' },
    ],
  };

  it('renders checkboxes for each prefecture', () => {
    const { getByLabelText } = render(<PrefectureCheckBoxGroup {...mockProps} />);
    expect(getByLabelText('北海道')).toBeInTheDocument();
    expect(getByLabelText('東京都')).toBeInTheDocument();
  });

  it('calls onChange when a checkbox is clicked', () => {
    const { getByLabelText } = render(<PrefectureCheckBoxGroup {...mockProps} />);
    fireEvent.click(getByLabelText('東京都'));
    expect(mockProps.onChange).toHaveBeenCalledWith(13, '東京都', true);
  });
});
