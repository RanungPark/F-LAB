import isNill from './isNill';

function isArray(value) {
  return !isNill(value) && Array.isArray(value);
}

export default isArray;