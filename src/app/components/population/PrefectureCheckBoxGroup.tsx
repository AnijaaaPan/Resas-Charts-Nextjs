'use client';

import { CheckBoxPrefecturesProps } from '@/app/interfaces/IProps';
import styles from '@/styles/CheckBox.module.css';
import CheckBoxInput from '../common/CheckBoxInput';

export const PrefectureCheckBoxGroup: React.FC<CheckBoxPrefecturesProps> = ({
  onChange,
  prefectures,
}) => (
  <div className={styles.checkBoxs}>
    {prefectures &&
      prefectures.map(({ prefCode, prefName }) => (
        <CheckBoxInput key={prefName} prefName={prefName} prefCode={prefCode} onChange={onChange} />
      ))}
  </div>
);
