import React from 'react';

import styles from '@/styles/CheckBox.module.css';
import { CheckBoxInputProps } from '@/types/IProps';

const PrefectureCheckBoxInput: React.FC<CheckBoxInputProps> = ({
  onChange,
  prefCode,
  prefName,
}) => (
  <div className={styles.checkBox} key={prefName}>
    <input
      type="checkbox"
      name="Prefecture Name"
      onChange={(event) => onChange(prefCode, prefName, event.target.checked)}
      id={`checkbox-prefectures-${prefCode}`}
    />
    <label htmlFor={`checkbox-prefectures-${prefCode}`}>{prefName}</label>
  </div>
);

export default PrefectureCheckBoxInput;
