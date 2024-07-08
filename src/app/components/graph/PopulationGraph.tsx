'use client';

import React from 'react';

import { GraphProps } from '@/app/interfaces/IProps';
import styles from '@/styles/Graph.module.css';
import Chart from './Chart';

const PopulationGraph: React.FC<GraphProps> = ({ labelIndex, labels, prefPopulationDatas }) => (
  <div className={styles.graph}>
    <Chart labelIndex={labelIndex} labels={labels} prefPopulationDatas={prefPopulationDatas} />
  </div>
);

export default PopulationGraph;
