import React from 'react';
import { number, color } from '@storybook/addon-knobs';

import { Gauge } from './Gauge';

export default {
  title: 'Gauge',
};

export const gaugeCircular = () => (
  <Gauge
    min={number('Min', 0)}
    max={number('Max', 100)}
    value={number('Value', 34)}
    color={color('Color', '#000')}
    strokeWidth={number('Stroke Width', 5)}
  />
);

gaugeCircular.story = {
  name: 'Circular',
};
