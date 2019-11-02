import React, { memo, useEffect, useRef, useState } from 'react';

import { debounce } from '../utils';

import './Gauge.css';

const toPercent = (value: number) => (value * 100).toFixed(2);

const computeAdvancement = (min: number, max: number, value: number) => {
  const amplitude = max - min;
  const delta = value - min;
  return Math.min(100, Math.max(0, delta / amplitude));
};

type GaugeProps = {
  min: number;
  max: number;
  value: number;
  color?: string;
  strokeWidth?: number;
};

const Gauge = memo(
  ({ min, max, value, color = '#999', strokeWidth = 5 }: GaugeProps) => {
    const advancement = computeAdvancement(min, max, value);

    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const onResize = debounce(() => {
        let newWidth = 0;
        if (ref.current) {
          newWidth = ref.current.offsetWidth;
        }
        newWidth !== width && setWidth(newWidth);
      }, 200);
      window.addEventListener('resize', onResize);
      onResize();

      return () => window.removeEventListener('resize', onResize);
    }, [ref.current]);

    return (
      <div className="gauge-container" ref={ref}>
        <div
          className="gauge-percent"
          style={{ color, fontSize: `${width * 0.2}px` }}
        >
          {toPercent(advancement)}%
        </div>

        <svg
          className="gauge-circle"
          viewBox="0 0 100 100"
          style={{ display: 'block' }}
        >
          <path
            d={`M 50,50 m 0,-${50 - strokeWidth / 2} a ${50 -
              strokeWidth / 2},${50 - strokeWidth / 2} 0 1 1 0,${100 -
              strokeWidth} a ${50 - strokeWidth / 2},${50 -
              strokeWidth / 2} 0 1 1 0,-${100 - strokeWidth}`}
            stroke={color}
            strokeWidth={strokeWidth}
            fillOpacity="0"
            style={{
              strokeDasharray: `
                ${Math.PI * (100 - strokeWidth) * advancement},
                ${Math.PI * (100 - strokeWidth) * (1 - advancement)}
              `,
            }}
          ></path>
        </svg>
      </div>
    );
  },
);

export { Gauge };
