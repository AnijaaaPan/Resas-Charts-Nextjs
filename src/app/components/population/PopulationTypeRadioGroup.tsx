'use client';

import { CheckBoxPrefPopulationProps } from '@/app/interfaces/IProps';
import styles from '@/styles/CheckBox.module.css';
import RadioInput from '../common/RadioInput';

export const PopulationTypeRadioGroup: React.FC<CheckBoxPrefPopulationProps> = ({
  labels,
  onChange,
}) => (
  <div className={`${styles.checkBoxs} ${styles.labels}`}>
    {labels.map((label, index) => (
      <RadioInput
        key={label}
        label={label}
        index={index}
        onChange={onChange}
        defaultChecked={index === 0}
      />
    ))}
  </div>
);
