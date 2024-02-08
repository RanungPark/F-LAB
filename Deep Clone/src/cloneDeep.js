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
 */

import clonePrimitive from './clonePrimitive';
import cloneReference from './cloneReference';
import isObject from './comparators/isObject';

const cloneDeep = (value) => {
  const cloneDeepValue = isObject(value) ? cloneReference(value) : clonePrimitive(value);

  return cloneDeepValue;
}

export default cloneDeep;