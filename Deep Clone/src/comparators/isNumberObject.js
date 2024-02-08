import isObject from './isObject';

import objectClass from './objectClass';

function isNumberObject(value) {
  return isObject(value) && objectClass(value) === '[object Number]'
}

export default isNumberObject;