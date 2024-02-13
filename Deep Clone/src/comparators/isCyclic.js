import isObject from './isObject';

function isCyclic(obj, seenObjects = new Set()) {
  if (isObject(obj)) {
    if (seenObjects.has(obj)) {
      return true;
    }
    seenObjects.add(obj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && isCyclic(obj[key], seenObjects)) {
        return true;
      }
    }
  }
  return false;
}

export default isCyclic;