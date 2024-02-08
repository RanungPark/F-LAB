import isNill from './isNill';

function isString(value) {
  const type = typeof value;

  return !isNill(value) && type === 'string';
}

export default isString;
