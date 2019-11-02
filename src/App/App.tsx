import React, { useEffect, useState } from 'react';

import './App.css';

import { Gauge } from '../Gauge/index';

type AppProps = {
  startTime: number;
  endTime: number;
};

const getCurrentTime = () => new Date().getTime();

const App = ({ startTime, endTime }: AppProps) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="app">
      <Gauge min={startTime} max={endTime} value={currentTime} />
    </div>
  );
};

export { App };
