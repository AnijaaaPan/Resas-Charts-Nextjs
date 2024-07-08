'use client';

import styles from '@/styles/CheckBox.module.css';
import { CheckBoxPrefPopulationProps } from '@/types/IProps';
import PopulationTypeRadioInput from '../common/PopulationTypeRadioInput';

export const PopulationTypeRadioGroup: React.FC<CheckBoxPrefPopulationProps> = ({
  labels,
  onChange,
}) => (
  <fieldset className={`${styles.checkBoxs} ${styles.labels}`}>
    {labels.map((label, index) => (
      <PopulationTypeRadioInput
        key={label}
        label={label}
        index={index}
        onChange={onChange}
        defaultChecked={index === 0}
      />
    ))}
  </fieldset>
);
