import isObject from '../comparators/isObject';

import cloneDeep from '../cloneDeep';

function copyObject(obj) {
  if (isObject(obj)) return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = cloneDeep(value);
    return acc;
  }, {});

  return null;
}

export default copyObject;