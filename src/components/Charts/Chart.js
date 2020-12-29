import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { widthAtom, heightAtom, marginAtom } from './chartStates';
import { XAxis } from './XAxis';
import { YAxis } from './YAxis';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { Legend } from './Legend';

export const Chart = ({ width, height, margin, data }) => {
  const [, setWidth] = useRecoilState(widthAtom);
  const [, setHeight] = useRecoilState(heightAtom);
  const [, setMargin] = useRecoilState(marginAtom);

  useEffect(() => {
    setWidth(width);
    setHeight(height);
    if (margin) {
      setMargin(margin);
    }
  }, [width, height, margin, setWidth, setHeight, setMargin]);

  const keys = [];
  let yMax = 0;
  const longestColumn = data.columns.reduce((length, column) => {
    keys.push(column[0]);
    yMax = Math.max(yMax, Math.max(...column.slice(1)));
    return Math.max(length, column.length);
  }, 0);
  const tickCount = Math.max(
    data.type === 'bar' ? longestColumn - 1 : longestColumn - 2,
    0
  );
  const xDomain = [0, tickCount];
  const yDomain = [0, yMax];

  return (
    <svg width={width} height={height} viewBox={`0, 0, ${width}, ${height}`}>
      {data.type === 'bar' && (
        <BarChart
          keys={keys}
          data={data.columns}
          xDomain={xDomain}
          yDomain={yDomain}
        />
      )}
      {data.type === 'line' && (
        <LineChart
          keys={keys}
          data={data.columns}
          xDomain={xDomain}
          yDomain={yDomain}
        />
      )}
      <XAxis margin={margin} xDomain={xDomain} tickCount={tickCount} />
      <YAxis margin={margin} yDomain={yDomain} tickCount={5} />
      <Legend
        keys={keys}
        data={data.columns}
        xDomain={[0, data.columns.length + 1]}
      />
    </svg>
  );
};
