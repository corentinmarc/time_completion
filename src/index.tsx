import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';
import { startTime, endTime } from './constants';

ReactDOM.render(
  <App startTime={startTime} endTime={endTime} />,
  document.querySelector('#app'),
);
