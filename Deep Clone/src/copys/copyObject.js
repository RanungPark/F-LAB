import isObject from '../comparators/isObject';

import cloneReference from '../cloneReference';

function copyObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = isObject(value) ? cloneReference(value) : value;
    return acc;
  }, {});
}

export default copyObject;