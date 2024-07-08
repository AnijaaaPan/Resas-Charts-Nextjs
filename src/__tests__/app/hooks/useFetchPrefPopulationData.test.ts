import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react';

import useFetchPrefPopulationData from '../../../app/hooks/useFetchPrefPopulationData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useFetchPrefPopulationData', () => {
  it('fetches population data for a prefecture', async () => {
    const data = {
      data: {
        result: {
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
      },
    };
    mockedAxios.get.mockResolvedValue(data);

    const { result } = await waitFor(() => renderHook(() => useFetchPrefPopulationData()));

    await act(async () => {
      result.current.handleCheckBoxPrefectures(13, '東京都', true);
    });

    expect(result.current.prefPopulation).toEqual([
      {
        prefName: '東京都',
        data: data.data.result.data,
      },
    ]);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
