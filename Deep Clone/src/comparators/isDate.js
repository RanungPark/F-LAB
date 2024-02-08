import isObject from './isObject';
import objectClass from './objectClass';

function isDate(value) {
  return isObject(value) && objectClass(value) === '[object Date]'
}

export default isDate;