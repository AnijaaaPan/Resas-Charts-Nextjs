'server-only';

import { PopulationData, PrefecturesData } from '@/interfaces/IResas';
import axios from 'axios';
import { cache } from 'react';

const GetPopulation = cache(
  async (prefectures: PrefecturesData): Promise<PopulationData[]> => {
    const { prefCode } = prefectures
    const data = await axios
      .get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`, {
        headers: {
          'X-API-KEY': process.env.RESAS_API_KEY
        },
      })
      .catch(() => null);

    return !data ? [] : data.data.result.data;
  }
);

export default GetPopulation;