'use client';

import PopulationGraph from './components/graph/PopulationGraph';
import { PopulationTypeRadioGroup } from './components/population/PopulationTypeRadioGroup';
import { PrefectureCheckBoxGroup } from './components/population/PrefectureCheckBoxGroup';
import { usePageLogic } from './hooks/usePageLogic';

export default function Home() {
  const {
    handleCheckBoxPrefectures,
    handlePopulationTypeChange,
    populationLabels,
    prefectures,
    prefPopulation,
    selectedPopulationType,
  } = usePageLogic();

  return (
    <main>
      <header>
        <h1>
          <span>都道府県別</span>
          <span>人口推移グラフ</span>
        </h1>
      </header>

      <section>
        <h2>都道府県</h2>
        <PrefectureCheckBoxGroup prefectures={prefectures} onChange={handleCheckBoxPrefectures} />
      </section>

      <section>
        <h2>推移タイプ</h2>
        <PopulationTypeRadioGroup labels={populationLabels} onChange={handlePopulationTypeChange} />
      </section>

      <section>
        <h2>グラフ</h2>
        <PopulationGraph
          labels={populationLabels}
          labelIndex={selectedPopulationType}
          prefPopulationDatas={prefPopulation}
        />
      </section>
    </main>
  );
}
