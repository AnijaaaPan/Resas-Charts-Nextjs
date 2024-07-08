'use client';

import styles from '@/styles/CheckBox.module.css';
import { CheckBoxPrefecturesProps } from '@/types/IProps';
import CheckBoxInput from '../common/CheckBoxInput';

export const PrefectureCheckBoxGroup: React.FC<CheckBoxPrefecturesProps> = ({
  onChange,
  prefectures,
}) => (
  <fieldset className={styles.checkBoxs}>
    {prefectures &&
      prefectures.map(({ prefCode, prefName }) => (
        <CheckBoxInput key={prefName} prefName={prefName} prefCode={prefCode} onChange={onChange} />
      ))}
  </fieldset>
);
