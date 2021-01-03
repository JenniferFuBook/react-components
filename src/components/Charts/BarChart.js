import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { select, scaleBand, scaleLinear, range } from 'd3';
import { color } from './constants';
import { widthAtom, heightAtom, marginAtom } from './chartStates';

export const BarChart = ({ data, xDomain, yDomain }) => {
  const width = useRecoilValue(widthAtom);
  const height = useRecoilValue(heightAtom);
  const { left, right, top, bottom } = useRecoilValue(marginAtom);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    select(containerRef.current).selectAll('*').remove();

    const x = scaleBand()
      .domain(range(xDomain[1]))
      .range([left, width - right]);
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);
    const barWidth = x.bandwidth() / (data.length + 1);

    data.forEach(([name, ...values], index) => {
      select(containerRef.current)
        .append('g')
        .selectAll('rect')
        .data(values)
        .join('rect')
        .attr('fill', color(index))
        .attr('x', (_, i) => x(i) + barWidth * index)
        .attr('y', () => y(0))
        .attr('width', barWidth)
        .attr('height', 0);
    });

    data.forEach((_, index) => {
      select(containerRef.current)
        .selectAll('rect')
        .transition()
        .duration(1000)
        .attr('y', (d) => y(d))
        .attr('height', (d) => y(0) - y(d))
        .delay((_, i) => i * 1000 * (index + 1));
    });
  }, [bottom, data, height, left, right, top, width, xDomain, yDomain]);

  return <g ref={containerRef} />;
};
