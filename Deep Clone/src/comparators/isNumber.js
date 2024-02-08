import isNill from './isNill';

function isNumber(value) {
  const type = typeof value;

  return !isNill(value) && type === 'number';
}

export default isNumber;