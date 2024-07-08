import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';

import useFetchPrefecturesData from '../app/hooks/useFetchPrefecturesData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useFetchPrefecturesData', () => {
  it('fetches prefectures data', async () => {
    const data = {
      data: {
        result: [
          { prefCode: 1, prefName: '北海道' },
          { prefCode: 13, prefName: '東京都' },
        ],
      },
    };
    mockedAxios.get.mockResolvedValue(data);

    const { result } = await waitFor(() => renderHook(() => useFetchPrefecturesData()));

    expect(result.current).toEqual(data.data.result);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
