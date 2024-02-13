import isObject from '../comparators/isObject';

import cloneReference from '../cloneReference';

function copyArray(value) {
  return value.map(v =>
    isObject(v) ? cloneReference(v) : v
  );

}

export default copyArray;