import isMap from '../comparators/isMap';

function copyMap(value) {
  if (isMap(value)) return new Map([...value]);

  return null;
}

export default copyMap;