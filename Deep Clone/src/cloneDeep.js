/**
 * 추상화 된 기능
 * 1. 배열을 복사
 * 2. 객체 복사
 * 3. 원시타입 리턴
 * 
 * 단일 기능
 * 1. 오브젝트 타입 비교
 *   - Date, Set, Map, object, typedArray, regex, symbol
 * 2. isArray
 * ---
 * 1. 복사 기능
 *  - Date, Set, Map, object, typedArray, regex, symbol
**/
import isCyclic from './comparators/isCyclic';
import isArray from './comparators/isArray';
import isObject from './comparators/isObject';
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

const validations = [
  {
    validationr: isArray,
    copy: copyArray,
  },
  {
    validationr: isDate,
    copy: copyDate,
  },
  {
    validationr: isRegExp,
    copy: copyRegExp,
  },
  {
    validationr: isMap,
    copy: copyMap,
  },
  {
    validationr: isSet,
    copy: copySet,
  },
  {
    validationr: isNumberObject,
    copy: copyNumberObject,
  },
  {
    validationr: isStringObject,
    copy: copyStringObject,
  },
  {
    validationr: isBooleanObject,
    copy: copyBooleanObject,
  },
  {
    validationr: isObject,
    copy: copyObject,
  },
]

const cloneDeep = (value) => {

  for (const { validationr, copy } of validations) {
    if (validationr(value)) return copy(value);
  }

  return value;
}

export default cloneDeep;