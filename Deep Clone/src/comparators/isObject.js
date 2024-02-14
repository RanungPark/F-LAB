import isNill from './isNill';

function isObject(value) {
  const type = typeof value;

  return !isNill(value) && type === 'object';
}

export default isObject;