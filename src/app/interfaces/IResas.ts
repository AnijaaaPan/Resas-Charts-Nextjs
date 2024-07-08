export interface PrefecturesData {
  prefCode: number;
  prefName: string;
}

export interface PrefPopulationData {
  data: PopulationData[];
  prefName: string;
}

export interface PopulationData {
  data: PopulationDataDetail[];
  label: string;
}

export interface PopulationDataDetail {
  rate?: number;
  value: number;
  year: number;
}
