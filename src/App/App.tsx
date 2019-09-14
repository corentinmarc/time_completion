import React from "react";

import "./App.css";

type AppProps = {
  advancement: number;
};

const toPercent = (value: number) => (value * 100).toFixed(2);

const App = ({ advancement }: AppProps) => (
  <div className="percent">{toPercent(advancement)}%</div>
);

export { App };
