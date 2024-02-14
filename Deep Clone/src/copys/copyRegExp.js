import isRegExp from '../comparators/isRegExp';

function copyRegExp(value) {
  if (isRegExp(value)) return new RegExp(value.valueOf());

  return null;
}

export default copyRegExp;