import React from 'react';
import { date } from '@storybook/addon-knobs';

import { App } from './App';
import { startTime, endTime } from '../constants';

export default {
  title: 'App',
};

export const app = () => (
  <App
    startTime={date('Start Date', new Date(startTime))}
    endTime={date('End Date', new Date(endTime))}
  />
);

app.story = {
  name: 'Real',
};

export const app1Min = () => (
  <App
    startTime={new Date().getTime()}
    endTime={new Date().getTime() + 60 * 1000}
  />
);

app1Min.story = {
  name: '1 minute',
};

export const app1Hour = () => (
  <App
    startTime={new Date().getTime()}
    endTime={new Date().getTime() + 60 * 60 * 1000}
  />
);

app1Hour.story = {
  name: '1 hour',
};
