import isNill from './isNill';

function isNumberObject(value) {
  return !isNill(value) && value instanceof Number
}

export default isNumberObject;