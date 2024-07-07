'use client';

import styles from '@/css/Button.module.css';
import { CheckBoxProps } from '@/interfaces/IProps';

export const HandleClickCheck = (prefCode: number, prefName: string, check: boolean) => {
  console.log(prefCode, prefName, check);
};

export const CheckBoxField: React.FC<CheckBoxProps> = ({ prefectures, onChange }) => {
  return (
    <>
      <div className={styles.prefecturesCheckBoxs}>
        {prefectures.map(({ prefCode, prefName }) => (
          <div className={styles.checkBox} key={prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              onChange={(event) => onChange(prefCode, prefName, event.target.checked)}
              id={'checkbox' + prefCode}
            />
            <label htmlFor={'checkbox' + prefCode}>{prefName}</label>
          </div>
        ))}
      </div>
    </>
  );
};
