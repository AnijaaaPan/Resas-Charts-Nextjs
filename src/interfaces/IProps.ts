import { PrefecturesData, PrefPopulationData } from "./IResas";

export type CheckBoxPrefecturesProps = {
  onChange: (prefCode: number, prefName: string, check: boolean) => void
  prefectures: PrefecturesData[]
};

export type CheckBoxPrefPopulationProps = {
  labels: string[]
  onChange: (index: number) => void
};

export type GraphProps = {
  labelIndex: number
  labels: string[]
  prefPopulationDatas: PrefPopulationData[]
};
