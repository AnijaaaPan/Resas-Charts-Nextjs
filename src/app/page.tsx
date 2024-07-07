'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Graph from '@/app/components/Graph';
import { PrefecturesData, PrefPopulationData } from '@/interfaces/IResas';
import { CheckBoxPrefectures } from './components/CheckBoxPrefectures';
import { CheckBoxPrefPopulation } from './components/CheckBoxPrefPopulation';

export default function Home() {
  const [prefectures, setPrefectures] = useState<PrefecturesData[]>([]);
  const [prefPopulation, setPrefPopulation] = useState<PrefPopulationData[]>([]);
  const labels = ['総人口', '年少人口', '生産年齢人口', '老年人口'];
  const [labelIndex, setLabel] = useState<number>(0);

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY },
      })
      .then((results) => setPrefectures(results.data.result))
      .catch(console.error);
  }, []);

  const HandleCheckBoxLabel = async (index: number) => {
    setLabel(index);
  };

  const HandleCheckBoxPrefectures = async (
    prefCode: number,
    prefName: string,
    isChecked: boolean
  ) => {
    if (isChecked) {
      if (prefPopulation.some((pop) => pop.prefName === prefName)) return;

      await axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY } }
        )
        .then((results) => {
          setPrefPopulation([...prefPopulation, { prefName, data: results.data.result.data }]);
        })
        .catch(console.error);
    } else {
      setPrefPopulation(prefPopulation.filter((pop) => pop.prefName !== prefName));
    }
  };

  return (
    <main>
      <h1>都道府県</h1>
      <CheckBoxPrefectures prefectures={prefectures} onChange={HandleCheckBoxPrefectures} />

      <h1>推移タイプ</h1>
      <CheckBoxPrefPopulation labels={labels} onChange={HandleCheckBoxLabel} />

      <Graph labels={labels} labelIndex={labelIndex} prefPopulationDatas={prefPopulation} />
    </main>
  );
}
