import isNill from './isNill';

function isBoolean(value) {
  const type = typeof value;

  return !isNill(value) && type === 'boolean';
}

export default isBoolean;
