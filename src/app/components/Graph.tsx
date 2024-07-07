'use client';

import { GraphProps } from '@/interfaces/IProps';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef } from 'react';

const Graph: React.FC<GraphProps> = ({ labelIndex, labels, prefPopulationDatas }) => {
  const series: Highcharts.SeriesOptionsType[] = prefPopulationDatas.map((p) => ({
    data: p.data[labelIndex].data.map((pd) => pd.value),
    name: p.prefName,
    type: 'line',
  }));

  const categories =
    prefPopulationDatas[0]?.data[labelIndex].data.map((pd) => `${pd.year}年`) || [];

  const options: Highcharts.Options = {
    series:
      series.length === 0
        ? [
            {
              type: 'line',
              name: '都道府県名',
              data: [],
            },
          ]
        : series,
    title: {
      text: `${labels[labelIndex]}推移`,
    },
    xAxis: {
      categories,
      title: {
        text: '年度',
      },
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
  };

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
};

export default Graph;
