import isObject from './isObject';
import objectClass from './objectClass';

function isWeakMap(value) {
  return isObject(value) && objectClass(value) === '[object WeakMap]'
}

export default isWeakMap;