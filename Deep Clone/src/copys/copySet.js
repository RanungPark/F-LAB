import isSet from '../comparators/isSet';

function  copySet(value) {
 if (isSet(value)) return new Set([...value]);

  return null;
}

export default copySet;