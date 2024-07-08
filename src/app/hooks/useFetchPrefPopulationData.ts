import axios from 'axios';
import { useState } from 'react';

import { PrefPopulationData } from '../../types/IResas';

const useFetchPrefPopulationData = () => {
  const [prefPopulation, setPrefPopulation] = useState<PrefPopulationData[]>([]);

  const handleCheckBoxPrefectures = async (
    prefCode: number,
    prefName: string,
    isChecked: boolean
  ) => {
    if (!isChecked) {
      setPrefPopulation(prefPopulation.filter((pop) => pop.prefName !== prefName));
      return;
    }

    if (prefPopulation.some((pop) => pop.prefName === prefName)) return;

    await axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
        {
          headers: {
            'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
          },
        }
      )
      .then((results) => {
        setPrefPopulation([...prefPopulation, { prefName, data: results.data.result.data }]);
      })
      .catch(console.error);
  };

  return { prefPopulation, handleCheckBoxPrefectures };
};

export default useFetchPrefPopulationData;
