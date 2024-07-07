'use client';

import { useState } from 'react';

import { CheckBoxPrefectures } from '@/app/components/CheckBoxPrefectures';
import { CheckBoxPrefPopulation } from '@/app/components/CheckBoxPrefPopulation';
import Graph from '@/app/components/Graph';
import { useFetchPrefectures } from '@/app/hooks/useFetchPrefectures';
import { useFetchPrefPopulation } from '@/app/hooks/useFetchPrefPopulation';

const labels = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

export default function Home() {
  const prefectures = useFetchPrefectures();
  const { prefPopulation, handleCheckBoxPrefectures } = useFetchPrefPopulation();
  const [labelIndex, setLabel] = useState<number>(0);

  return (
    <main>
      <h1>都道府県</h1>
      <CheckBoxPrefectures prefectures={prefectures} onChange={handleCheckBoxPrefectures} />

      <h1>推移タイプ</h1>
      <CheckBoxPrefPopulation labels={labels} onChange={setLabel} />

      <Graph labels={labels} labelIndex={labelIndex} prefPopulationDatas={prefPopulation} />
    </main>
  );
}
