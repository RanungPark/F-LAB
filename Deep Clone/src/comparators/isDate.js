import isNill from './isNill';

function isDate(value) {
  return !isNill(value) && value instanceof Date
}

export default isDate;