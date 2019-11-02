let DEBOUNCE_TIMEOUT: NodeJS.Timeout;

export const debounce = (fn: (...args: any) => any, delay: number) => () => {
  // clear the timeout
  clearTimeout(DEBOUNCE_TIMEOUT);
  // start timing for event "completion"
  DEBOUNCE_TIMEOUT = setTimeout(fn, delay);
};
