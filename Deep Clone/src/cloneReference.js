import isArray from './comparators/isArray';
import isDate from './comparators/isDate';
import isRegExp from './comparators/isRegExp';
import isMap from './comparators/isMap';
import isSet from './comparators/isSet';
import isNumberObject from './comparators/isNumberObject';
import isStringObject from './comparators/isStringObject';
import isBooleanObject from './comparators/isBooleanObject';

import copyArray from './copys/copyArray';
import copyObject from './copys/copyObject';
import copyDate from './copys/copyDate';
import copyRegExp from './copys/copyRegExp';
import copyMap from './copys/copyMap';
import copySet from './copys/copySet';
import copyNumberObject from './copys/copyNumberObject';
import copyStringObject from './copys/copyStringObject';
import copyBooleanObject from './copys/copyBooleanObject';
import isCyclic from './comparators/isCyclic';

function cloneReference(value) {
  if (isCyclic(value)) throw new Error('순환참조 에러')
  if (isArray(value)) return copyArray(value);
  if (isDate(value)) return copyDate(value);
  if (isRegExp(value)) return copyRegExp(value);
  if (isMap(value)) return copyMap(value);
  if (isSet(value)) return copySet(value);
  if (isNumberObject(value)) return copyNumberObject(value);
  if (isStringObject(value)) return copyStringObject(value);
  if (isBooleanObject(value)) return copyBooleanObject(value);
  return copyObject(value);
}

export default cloneReference;