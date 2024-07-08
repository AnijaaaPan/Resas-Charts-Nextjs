'use client';

import React from 'react';

import styles from '../../../styles/Graph.module.css';
import { GraphProps } from '../../../types/IProps';
import HighChart from './HighChart';

const PopulationGraph: React.FC<GraphProps> = ({ labelIndex, labels, prefPopulationDatas }) => (
  <div className={styles.graph}>
    <HighChart labelIndex={labelIndex} labels={labels} prefPopulationDatas={prefPopulationDatas} />
  </div>
);

export default PopulationGraph;
