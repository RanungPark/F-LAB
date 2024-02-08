import isNull from './isNull';
import isUndefined from './isUndefined';

function isNill(value) {
  return isNull(value) || isUndefined(value);
}

export default isNill;