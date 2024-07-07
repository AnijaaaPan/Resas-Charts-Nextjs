'use client';

import styles from '@/css/Button.module.css';
import { CheckBoxPrefPopulationProps } from '@/interfaces/IProps';

export const CheckBoxPrefPopulation: React.FC<CheckBoxPrefPopulationProps> = ({
  labels,
  onChange,
}) => (
  <div className={`${styles.checkBoxs} ${styles.labels}`}>
    {labels.map((label, index) => {
      return (
        <div className={styles.checkBox} key={label}>
          <input
            type="radio"
            name="PrefPopulation Name"
            onChange={() => onChange(index)}
            defaultChecked={index === 0}
            id={`checkbox-label-${index}`}
          />
          <label htmlFor={`checkbox-label-${index}`}>{label}</label>
        </div>
      );
    })}
  </div>
);
