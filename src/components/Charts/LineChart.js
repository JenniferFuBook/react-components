import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { line, select, scaleLinear, scaleOrdinal, schemeSet1 } from 'd3';
import { widthAtom, heightAtom, marginAtom } from './chartStates';

export const LineChart = ({ keys, data, xDomain, yDomain }) => {
  const width = useRecoilValue(widthAtom);
  const height = useRecoilValue(heightAtom);
  const { left, right, top, bottom } = useRecoilValue(marginAtom);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    select('g').selectAll('*').remove();

    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);
    const color = scaleOrdinal().domain(keys).range(schemeSet1);

    const lineFn = line()
      .x((_, i) => x(i))
      .y((d) => y(d));

    data.forEach(([_, ...values], index) => {
      select(containerRef.current)
        .append('path')
        .datum(values)
        .attr('fill', 'none')
        .attr('stroke', () => color(index))
        .attr('stroke-width', 1.5)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('d', lineFn);
    });
  }, [bottom, data, height, keys, left, right, top, width, xDomain, yDomain]);

  return <g ref={containerRef} />;
};
