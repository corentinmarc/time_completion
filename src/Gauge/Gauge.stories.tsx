import React from 'react';
import { number } from '@storybook/addon-knobs';

import { Gauge } from './Gauge';

export default {
  title: 'Gauge',
};

export const gaugeCircular = () => (
  <Gauge
    min={number('Min', 0)}
    max={number('Max', 100)}
    value={number('Value', 34)}
  />
);

gaugeCircular.story = {
  name: 'Circular',
};
