import { useRef, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { select, scaleLinear, axisBottom } from 'd3';
import { widthAtom, heightAtom, marginAtom } from './chartStates';

export const XAxis = ({ xDomain, tickCount }) => {
  const width = useRecoilValue(widthAtom);
  const height = useRecoilValue(heightAtom);
  const { left, right, bottom } = useRecoilValue(marginAtom);
  const xAxisRef = useRef(null);

  useLayoutEffect(() => {
    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);
    const axis = axisBottom;
    const xAxis = axis(x).ticks(tickCount).tickSizeOuter(0);

    select(xAxisRef.current).call(xAxis);
  }, [left, right, tickCount, width, xDomain]);

  return <g transform={`translate(0, ${height - bottom})`} ref={xAxisRef} />;
};
