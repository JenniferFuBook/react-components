import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  select,
  scaleBand,
  scaleLinear,
  scaleOrdinal,
  schemeSet1,
  range,
} from 'd3';
import { widthAtom, heightAtom, marginAtom } from './chartStates';

export const BarChart = ({ keys, data, xDomain, yDomain }) => {
  const width = useRecoilValue(widthAtom);
  const height = useRecoilValue(heightAtom);
  const { left, right, top, bottom } = useRecoilValue(marginAtom);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    select('g').selectAll('*').remove();

    const x = scaleBand()
      .domain(range(xDomain[1]))
      .range([left, width - right]);
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);
    const color = scaleOrdinal().domain(keys).range(schemeSet1);
    const barWidth = x.bandwidth() / (data.length + 1);

    data.forEach(([_, ...values], index) => {
      select(containerRef.current)
        .append('g')
        .selectAll('rect')
        .data(values)
        .join('rect')
        .attr('fill', color(index))
        .attr('x', (_, i) => x(i) + barWidth * index)
        .attr('y', (d) => y(d))
        .attr('width', barWidth)
        .attr('height', (d) => y(0) - y(d), 0);
    });
  }, [bottom, data, height, keys, left, right, top, width, xDomain, yDomain]);

  return <g ref={containerRef} />;
};
