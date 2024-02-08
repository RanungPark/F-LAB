import isObject from './isObject';

import objectClass from './objectClass';

function isStringObject(value) {
  return isObject(value) && objectClass(value) === '[object String]'
}

export default isStringObject;