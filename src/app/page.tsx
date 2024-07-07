'use client';

import { useState } from 'react';

import PopulationGraph from '@/app/components/PopulationGraph';
import { PopulationTypeRadioGroup } from '@/app/components/PopulationTypeRadioGroup';
import { PrefectureCheckBoxGroup } from '@/app/components/PrefectureCheckBoxGroup';
import { useFetchPrefectures } from '@/app/hooks/useFetchPrefectures';
import { useFetchPrefPopulation } from '@/app/hooks/useFetchPrefPopulation';

const populationLabels = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

export default function Home() {
  const prefectures = useFetchPrefectures();
  const { prefPopulation, handleCheckBoxPrefectures } = useFetchPrefPopulation();
  const [labelIndex, setLabel] = useState<number>(0);

  return (
    <main>
      <section>
        <h1>都道府県</h1>
        <PrefectureCheckBoxGroup prefectures={prefectures} onChange={handleCheckBoxPrefectures} />
      </section>

      <section>
        <h1>推移タイプ</h1>
        <PopulationTypeRadioGroup labels={populationLabels} onChange={setLabel} />
      </section>

      <section>
        <h1>グラフ</h1>
        <PopulationGraph
          labels={populationLabels}
          labelIndex={labelIndex}
          prefPopulationDatas={prefPopulation}
        />
      </section>
    </main>
  );
}
