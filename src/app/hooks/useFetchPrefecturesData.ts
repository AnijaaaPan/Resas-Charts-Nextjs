import axios from 'axios';
import { useEffect, useState } from 'react';

import { PrefecturesData } from '@/types/IResas';

export const useFetchPrefecturesData = () => {
  const [prefectures, setPrefectures] = useState<PrefecturesData[]>([]);

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
        },
      })
      .then((results) => setPrefectures(results.data.result))
      .catch(console.error);
  }, []);

  return prefectures;
};
