import isNill from './isNill';

function isSymbol(value) {
  const type = typeof value;

  return !isNill(value) && type === 'symbol';
}

export default isSymbol;