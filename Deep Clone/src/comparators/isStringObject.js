import isNill from './isNill';

function isStringObject(value) {
  return !isNill(value) && value instanceof String
}

export default isStringObject;