import { useState } from 'react';
import { useFetchPrefectures } from './useFetchPrefectures';
import { useFetchPrefPopulation } from './useFetchPrefPopulation';

const populationLabels = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

export const usePageLogic = () => {
  const prefectures = useFetchPrefectures();
  const [selectedPopulationType, setSelectedPopulationType] = useState<number>(0);
  const { prefPopulation, handleCheckBoxPrefectures } = useFetchPrefPopulation();

  const handlePopulationTypeChange = (index: number) => {
    setSelectedPopulationType(index);
  };

  return {
    handleCheckBoxPrefectures,
    handlePopulationTypeChange,
    populationLabels,
    prefectures,
    prefPopulation,
    selectedPopulationType,
  };
};
