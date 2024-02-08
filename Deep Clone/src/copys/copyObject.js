import isObject from '../comparators/isObject';

import clonePrimitive from '../clonePrimitive';
import cloneReference from '../cloneReference';

import getKeysAndValues from '../getKeysAndValues';

function copyObject(value) {
  const copyValue = {};
  const entries = getKeysAndValues(value);

  for (const [key, value] of entries) {
    copyValue[key] = isObject(value) ? cloneReference(value) : clonePrimitive(value);
  }

  return copyValue;
}

export default copyObject;