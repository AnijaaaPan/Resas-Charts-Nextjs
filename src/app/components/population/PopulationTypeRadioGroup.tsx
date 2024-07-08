'use client';

import styles from '@/styles/CheckBox.module.css';
import { CheckBoxPrefPopulationProps } from '@/types/IProps';
import RadioInput from '../common/RadioInput';

export const PopulationTypeRadioGroup: React.FC<CheckBoxPrefPopulationProps> = ({
  labels,
  onChange,
}) => (
  <fieldset className={`${styles.checkBoxs} ${styles.labels}`}>
    {labels.map((label, index) => (
      <RadioInput
        key={label}
        label={label}
        index={index}
        onChange={onChange}
        defaultChecked={index === 0}
      />
    ))}
  </fieldset>
);
