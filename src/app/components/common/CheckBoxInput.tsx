import React from 'react';

import { CheckBoxInputProps } from '@/app/interfaces/IProps';
import styles from '@/styles/CheckBox.module.css';

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ onChange, prefCode, prefName }) => (
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

export default CheckBoxInput;
