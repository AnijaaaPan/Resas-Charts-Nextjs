import { useState } from 'react';
import useFetchPrefecturesData from './useFetchPrefecturesData';
import useFetchPrefPopulationData from './useFetchPrefPopulationData';

const populationLabels = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

const usePageLogic = () => {
  const prefectures = useFetchPrefecturesData();
  const [selectedPopulationType, setSelectedPopulationType] = useState<number>(0);
  const { prefPopulation, handleCheckBoxPrefectures } = useFetchPrefPopulationData();

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

export default usePageLogic;
