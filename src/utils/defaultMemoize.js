/**
 * Memoizing function.
 *
 * Copied from `reselect` library.
 * https://github.com/reactjs/reselect/blob/master/src/index.js
 *
 */


function defaultEqualityCheck(a, b) {
  return a === b;
}

export function defaultMemoize(func, equalityCheck = defaultEqualityCheck) {
  let lastArgs = null;
  let lastResult = null;
  return (...args) => {
    if (
      lastArgs !== null &&
      lastArgs.length === args.length &&
      args.every((value, index) => equalityCheck(value, lastArgs[index]))
    ) {
      return lastResult;
    }
    lastResult = func(...args);
    lastArgs = args;
    return lastResult;
  };
}
