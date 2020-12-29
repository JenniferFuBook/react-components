import React from 'react';
import { ClearableInput, MultiValueClearableInput } from './index';

const stories = {
  title: 'Components/Advanced Input Fields',
};

export default stories;

export const clearableInput = () => {
  return <ClearableInput />;
};

export const multipleValueClearableInput = () => {
  return <MultiValueClearableInput />;
};
