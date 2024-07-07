import { PrefecturesData, PrefPopulationData } from './IResas';

export interface CheckBoxPrefecturesProps {
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
  prefectures: PrefecturesData[];
}

export interface CheckBoxPrefPopulationProps {
  labels: string[];
  onChange: (index: number) => void;
}

export interface GraphProps {
  labelIndex: number;
  labels: string[];
  prefPopulationDatas: PrefPopulationData[];
}
