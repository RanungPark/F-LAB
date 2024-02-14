import isDate from '../comparators/isDate';

function copyDate(value) {
  if (isDate(value)) return new Date(value.toString());

  return null;
}

export default copyDate