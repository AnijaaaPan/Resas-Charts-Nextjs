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
      <section>
        <h1>都道府県</h1>
        <PrefectureCheckBoxGroup prefectures={prefectures} onChange={handleCheckBoxPrefectures} />
      </section>

      <section>
        <h1>推移タイプ</h1>
        <PopulationTypeRadioGroup labels={populationLabels} onChange={handlePopulationTypeChange} />
      </section>

      <section>
        <h1>グラフ</h1>
        <PopulationGraph
          labels={populationLabels}
          labelIndex={selectedPopulationType}
          prefPopulationDatas={prefPopulation}
        />
      </section>
    </main>
  );
}
