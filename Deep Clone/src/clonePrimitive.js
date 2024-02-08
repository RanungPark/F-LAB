import isNumber from './comparators/isNumber';
import isString from './comparators/isString';
import isBoolean from './comparators/isBoolean';
import isNull from './comparators/isNull';
import isUndefined from './comparators/isUndefined';

import copyPrimitive from './copys/copyPrimitive';

function clonePrimitive(value) {
  if (isNumber(value) ||
    isString(value) ||
    isBoolean(value) ||
    isNull(value) ||
    isUndefined(value)) return copyPrimitive(value);
}

export default clonePrimitive;