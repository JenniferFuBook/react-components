import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { select, scaleLinear, scaleOrdinal, schemeSet1 } from 'd3';
import { widthAtom, heightAtom, marginAtom } from './chartStates';

export const Legend = ({ keys, data, xDomain }) => {
  const width = useRecoilValue(widthAtom);
  const height = useRecoilValue(heightAtom);
  const { left, right } = useRecoilValue(marginAtom);
  const legendRef = useRef(null);

  useLayoutEffect(() => {
    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);

    const color = scaleOrdinal().domain(keys).range(schemeSet1);

    select(legendRef.current)
      .selectAll('text')
      .data(keys)
      .join('text')
      .attr('x', (_, i) => x(i + 1))
      .attr('fill', (_, i) => color(i))
      .text((d) => d);
  }, [data, keys, left, right, width, xDomain]);

  return <g transform={`translate(0, ${height - 20})`} ref={legendRef} />;
};
