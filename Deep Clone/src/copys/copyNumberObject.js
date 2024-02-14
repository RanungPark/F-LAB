import isNumberObject from '../comparators/isNumberObject';

function copyNumberObject(value) {
  if (isNumberObject(value)) return new Number(value.valueOf());

  return null;
}

export default copyNumberObject;
