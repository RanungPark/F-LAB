import clonePrimitive from '../clonePrimitive';
import cloneReference from '../cloneReference';
import isArray from '../comparators/isArray';

function copyArray(value) {
  const copyValue = value.map(v =>
    isArray(v) ? cloneReference(v) : clonePrimitive(v)
  )

  return copyValue;
}

export default copyArray;