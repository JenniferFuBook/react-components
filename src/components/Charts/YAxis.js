import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { select, scaleLinear, axisLeft } from 'd3';
import { heightAtom, marginAtom } from './chartStates';

export const YAxis = ({ yDomain, tickCount }) => {
  const height = useRecoilValue(heightAtom);
  const { left, top, bottom } = useRecoilValue(marginAtom);
  const yAxisRef = useRef(null);

  useLayoutEffect(() => {
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);
    const axis = axisLeft;
    const yAxis = axis(y).ticks(tickCount).tickSizeOuter(0);

    select(yAxisRef.current).call(yAxis);
  }, [bottom, height, tickCount, top, yDomain]);

  return <g transform={`translate(${left}, 0)`} ref={yAxisRef} />;
};
