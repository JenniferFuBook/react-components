import { scaleOrdinal, schemeSet1 } from 'd3';

export const color = scaleOrdinal().range(schemeSet1.slice(2));
