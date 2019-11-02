import React from 'react';

type GaugeProps = {
  min: number;
  max: number;
  value: number;
};

const Gauge = ({ min, max, value }: GaugeProps) => {
  return (
    <div>
      Gauge {min} {max} {value}
    </div>
  );
};

export { Gauge };
