import isArray from '../comparators/isArray';

import cloneDeep from '../cloneDeep';

function copyArray(value) {
  if (isArray(value)) return value.map(v => cloneDeep(v));

  return null;
}

export default copyArray;