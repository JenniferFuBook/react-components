import { atom } from 'recoil';

const margin = {
  left: 40,
  right: 20,
  top: 20,
  bottom: 60,
};

/**
 * It is the atom to track chart width.
 */
export const widthAtom = atom({
  key: 'width',
  default: margin.left + margin.right,
});

/**
 * It is the atom to track chart height, and the default value is margin top + bottom.
 */
export const heightAtom = atom({
  key: 'height',
  default: margin.top + margin.bottom,
});

/**
 * It is the atom to track chart margin.
 */
export const marginAtom = atom({
  key: 'margin',
  default: margin,
});
