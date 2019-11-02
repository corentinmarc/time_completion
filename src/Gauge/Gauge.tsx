import React, { memo } from 'react';

import './Gauge.css';

const toPercent = (value: number) => (value * 100).toFixed(2);

const computeAdvancement = (min: number, max: number, value: number) => {
  const amplitude = max - min;
  const delta = value - min;
  return delta / amplitude;
};

type GaugeProps = {
  min: number;
  max: number;
  value: number;
};

const Gauge = memo(({ min, max, value }: GaugeProps) => {
  return (
    <div className="gauge-percent">
      {toPercent(computeAdvancement(min, max, value))}%
    </div>
  );
});

export { Gauge };
