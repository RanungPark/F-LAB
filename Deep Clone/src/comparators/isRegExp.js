import isObject from './isObject';

import objectClass from './objectClass';

function isRegExp(value) {
  return isObject(value) && objectClass(value) === '[object RegExp]'
}

export default isRegExp;