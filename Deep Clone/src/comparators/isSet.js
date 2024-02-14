import isNill from './isNill';

function isSet(value) {
  return !isNill(value) && value instanceof Set
}

export default isSet;