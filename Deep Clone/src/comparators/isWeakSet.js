import isObject from './isObject';
import objectClass from './objectClass';

function isWeakSet(value) {
  return isObject(value) && objectClass(value) === '[object WeakSet]'
}

export default isWeakSet;