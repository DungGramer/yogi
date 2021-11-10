import * as React from 'react';
import { VisuallyHidden } from '../src/index';
import { VisuallyHiddenInput } from '../src/index';

import { themeDecorator } from '../../story-layout/src/index';

export default {
  title: 'Visually Hidden',
  decorators: [themeDecorator],
  parameters: {
    layout: 'centered',
  },
};

export const hiddenSpan = () => (
  <VisuallyHidden>This is visually hidden</VisuallyHidden>
);

export const hiddenInput = () => (
  <VisuallyHiddenInput
    defaultChecked
    onChange={(event) => {
      console.log(event.target.checked);
    }}
  />
);
