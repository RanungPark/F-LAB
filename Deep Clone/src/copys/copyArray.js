import isObject from '../comparators/isObject';

import clonePrimitive from '../clonePrimitive';
import cloneReference from '../cloneReference';

function copyArray(value) {
  const copyValue = value.map(v =>
    isObject(v) ? cloneReference(v) : clonePrimitive(v)
  )

  return copyValue;
}

export default copyArray;