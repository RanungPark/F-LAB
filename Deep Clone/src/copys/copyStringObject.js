import isStringObject from '../comparators/isStringObject';

function copyStringObject(value) {
  if (isStringObject(value)) return new String(value.valueOf());

  return null;
}

export default copyStringObject;
