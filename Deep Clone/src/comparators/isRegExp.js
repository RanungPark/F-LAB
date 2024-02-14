import isNill from './isNill';

function isRegExp(value) {
  return !isNill(value) && value instanceof RegExp
}

export default isRegExp;