import { renderHook } from '@testing-library/react';
import { act } from 'react';

import usePageLogic from '../../../app/hooks/usePageLogic';

describe('usePageLogic', () => {
  it('handles population type change', () => {
    const { result } = renderHook(() => usePageLogic());

    act(() => {
      result.current.handlePopulationTypeChange(2);
    });

    expect(result.current.selectedPopulationType).toBe(2);
  });
});
