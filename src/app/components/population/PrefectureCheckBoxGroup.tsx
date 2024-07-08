'use client';

import styles from '../../../styles/CheckBox.module.css';
import { CheckBoxPrefecturesProps } from '../../../types/IProps';
import PrefectureCheckBoxInput from '../common/PrefectureCheckBoxInput';

const PrefectureCheckBoxGroup: React.FC<CheckBoxPrefecturesProps> = ({ onChange, prefectures }) => (
  <fieldset className={styles.checkBoxs}>
    {prefectures &&
      prefectures.map(({ prefCode, prefName }) => (
        <PrefectureCheckBoxInput
          key={prefName}
          prefName={prefName}
          prefCode={prefCode}
          onChange={onChange}
        />
      ))}
  </fieldset>
);

export default PrefectureCheckBoxGroup;
