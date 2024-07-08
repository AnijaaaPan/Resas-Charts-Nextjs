import { PrefecturesData, PrefPopulationData } from './IResas';

export interface CheckBoxPrefecturesProps {
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
  prefectures: PrefecturesData[];
}

export interface CheckBoxInputProps {
  onChange: (prefCode: number, prefName: string, isChecked: boolean) => void;
  prefCode: number;
  prefName: string;
}

export interface CheckBoxPrefPopulationProps {
  labels: string[];
  onChange: (index: number) => void;
}

export interface RadioInputProps {
  defaultChecked?: boolean;
  index: number;
  label: string;
  onChange: (index: number) => void;
}

export interface GraphProps {
  labelIndex: number;
  labels: string[];
  prefPopulationDatas: PrefPopulationData[];
}
