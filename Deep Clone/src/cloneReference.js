import isArray from './comparators/isArray';
import isDate from './comparators/isDate';
import isMap from './comparators/isMap';
import isRegExp from './comparators/isRegExp';
import isSet from './comparators/isSet';
import copyDate from './copys/copyDate';
import copyMap from './copys/copyMap';
import copyRegExp from './copys/copyRegExp';
import copySet from './copys/copySet';
import copyArray from './copys/copyArray';
import isObject from './comparators/isObject';
import copyObject from './copys/copyObject';

function cloneReference(value) {
  if (isArray(value)) return copyArray(value);
  if (isObject(value)) return copyObject(value);
  if (isDate(value)) return copyDate(value);
  if (isRegExp(value)) return copyRegExp(value);
  if (isMap(value)) return copyMap(value);
  if (isSet(value)) return copySet(value);
}

export default cloneReference;