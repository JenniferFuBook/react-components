import React from 'react';
import { RecoilRoot } from 'recoil';

import { Chart } from './index';

const stories = {
  title: 'Components/Charts',
  decorators: [(storyFn) => <RecoilRoot>{storyFn()}</RecoilRoot>],
};

export default stories;

export const lineChart = () => {
  return (
    <Chart
      width={600}
      height={350}
      data={{
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'line',
      }}
    />
  );
};

export const barChart = () => {
  return (
    <Chart
      width={600}
      height={350}
      data={{
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'bar',
      }}
    />
  );
};
