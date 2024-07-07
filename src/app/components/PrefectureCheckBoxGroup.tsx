'use client';

import styles from '@/css/CheckBox.module.css';
import { CheckBoxPrefecturesProps } from '@/interfaces/IProps';

export const PrefectureCheckBoxGroup: React.FC<CheckBoxPrefecturesProps> = ({
  onChange,
  prefectures,
}) => (
  <div className={styles.checkBoxs}>
    {prefectures &&
      prefectures.map(({ prefCode, prefName }) => (
        <div className={styles.checkBox} key={prefName}>
          <input
            type="checkbox"
            name="Prefecture Name"
            onChange={(event) => onChange(prefCode, prefName, event.target.checked)}
            id={`checkbox-prefectures-${prefCode}`}
          />
          <label htmlFor={`checkbox-prefectures-${prefCode}`}>{prefName}</label>
        </div>
      ))}
  </div>
);
