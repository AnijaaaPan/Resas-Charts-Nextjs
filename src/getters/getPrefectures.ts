'server-only';

import { PrefecturesData } from '@/interfaces/IResas';
import axios from 'axios';
import { cache } from 'react';

// 都道府県一覧を取得する
const getPrefectures = cache(
  async (): Promise<PrefecturesData[]> => {
    const data = await axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'X-API-KEY': process.env.RESAS_API_KEY
        },
      })
      .catch(() => null);

    return !data ? [] : data.data.result;
  }
);

export default getPrefectures;