import isNill from './isNill';

function isObject(value) {
  const type = typeof value;

  return type === 'object' && !isNill(value);

}

export default isObject;