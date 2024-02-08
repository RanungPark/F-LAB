import isObject from './isObject';
import objectClass from './objectClass';

function isBooleanObject(value) {
  return isObject(value) && objectClass(value) === '[object Boolean]'
}

export default isBooleanObject;