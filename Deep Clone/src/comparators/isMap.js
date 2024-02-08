import isObject from './isObject';
import objectClass from './objectClass';

function isMap(value) {
  return isObject(value) && objectClass(value) === '[object Map]'
}

export default isMap;