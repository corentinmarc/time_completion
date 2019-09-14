import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

const startDate = new Date("06-24-2019");
const endDate = new Date("06-24-2023");

const startTime = startDate.getTime();
const endTime = endDate.getTime();

const currentTime = new Date().getTime();

const totalDuration = endTime - startTime;
const passedDuration = currentTime - startTime;
const advancement = passedDuration / totalDuration;

ReactDOM.render(
  <App advancement={advancement} />,
  document.querySelector("#app")
);
