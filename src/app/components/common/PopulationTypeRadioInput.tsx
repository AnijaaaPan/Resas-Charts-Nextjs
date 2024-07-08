import React from 'react';

import styles from '@/styles/CheckBox.module.css';
import { RadioInputProps } from '@/types/IProps';

const PopulationTypeRadioInput: React.FC<RadioInputProps> = ({
  defaultChecked = false,
  index,
  label,
  onChange,
}) => (
  <div className={styles.checkBox} key={label}>
    <input
      type="radio"
      name="Population Type"
      onChange={() => onChange(index)}
      defaultChecked={defaultChecked}
      id={`radio-label-${index}`}
    />
    <label htmlFor={`radio-label-${index}`}>{label}</label>
  </div>
);

export default PopulationTypeRadioInput;
