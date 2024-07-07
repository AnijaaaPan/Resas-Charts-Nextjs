'use client';

import Graph from '@/app/components/Graph';
import { PrefecturesData, PrefPopulationData } from '@/interfaces/IResas';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
      .catch(() => {});
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
        .catch(() => {});
    } else {
      setPrefPopulation(prefPopulation.filter((pop) => pop.prefName !== prefName));
    }
  };

  return (
    <main>
      <h2>都道府県</h2>
      <CheckBoxPrefectures prefectures={prefectures} onChange={HandleCheckBoxPrefectures} />

      <h2>推移タイプ</h2>
      <CheckBoxPrefPopulation labels={labels} onChange={HandleCheckBoxLabel} />

      <h2>グラフ: {labels[labelIndex]}推移</h2>
      <Graph labels={labels} labelIndex={labelIndex} prefPopulationDatas={prefPopulation} />
    </main>
  );
}
