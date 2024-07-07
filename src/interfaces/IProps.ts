import { PrefecturesData } from "./IResas";

export type CheckBoxProps = {
  prefectures: PrefecturesData[];
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
};