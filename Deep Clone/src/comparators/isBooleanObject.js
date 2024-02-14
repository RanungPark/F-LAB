import isNill from './isNill';

function isBooleanObject(value) {
  return !isNill(value) && value instanceof Boolean
}

export default isBooleanObject;