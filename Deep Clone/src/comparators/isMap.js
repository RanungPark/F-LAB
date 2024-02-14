import isNill from './isNill';

function isMap(value) {
  return !isNill(value) && value instanceof Map
}

export default isMap;