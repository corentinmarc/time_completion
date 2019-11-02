import React, { useEffect, useState } from 'react';

import './App.css';

const toPercent = (value: number) => (value * 100).toFixed(2);

const computeAdvancement = (startTime: number, endTime: number) => {
  const currentTime = new Date().getTime();

  const totalDuration = endTime - startTime;
  const passedDuration = currentTime - startTime;
  return passedDuration / totalDuration;
};

type AppProps = {
  startTime: number;
  endTime: number;
};

const App = ({ startTime, endTime }: AppProps) => {
  const [advancement, setAdvancement] = useState();

  useEffect(() => {
    const interval = setInterval(
      () => setAdvancement(computeAdvancement(startTime, endTime)),
      1000,
    );
    return () => clearInterval(interval);
  });

  return <div className="percent">{toPercent(advancement)}%</div>;
};

export { App };
