'use client';

import styles from '@/css/CheckBox.module.css';
import { CheckBoxPrefPopulationProps } from '@/interfaces/IProps';

export const PopulationTypeRadioGroup: React.FC<CheckBoxPrefPopulationProps> = ({
  labels,
  onChange,
}) => (
  <div className={`${styles.checkBoxs} ${styles.labels}`}>
    {labels.map((label, index) => (
      <div className={styles.checkBox} key={label}>
        <input
          type="radio"
          name="Population Type"
          onChange={() => onChange(index)}
          defaultChecked={index === 0}
          id={`radio-label-${index}`}
        />
        <label htmlFor={`radio-label-${index}`}>{label}</label>
      </div>
    ))}
  </div>
);
