import isArray from './comparators/isArray';
import isObject from './comparators/isObject';
import isDate from './comparators/isDate';
import isRegExp from './comparators/isRegExp';
import isMap from './comparators/isMap';
import isSet from './comparators/isSet';

import copyArray from './copys/copyArray';
import copyObject from './copys/copyObject';
import copyDate from './copys/copyDate';
import copyRegExp from './copys/copyRegExp';
import copyMap from './copys/copyMap';
import copySet from './copys/copySet';

function cloneReference(value) {
  if (isArray(value)) return copyArray(value);
  if (isObject(value)) return copyObject(value);
  if (isDate(value)) return copyDate(value);
  if (isRegExp(value)) return copyRegExp(value);
  if (isMap(value)) return copyMap(value);
  if (isSet(value)) return copySet(value);
}

export default cloneReference;