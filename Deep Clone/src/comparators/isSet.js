import isObject from './isObject';

import objectClass from './objectClass';

function isSet(value) {
  return isObject(value) && objectClass(value) === '[object Set]'
}

export default isSet;