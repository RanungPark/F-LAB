import isBooleanObject from '../comparators/isBooleanObject';

function copyBooleanObject(value) {
  if (isBooleanObject(value)) return new Boolean(value.valueOf());

  return null;
}

export default copyBooleanObject;
