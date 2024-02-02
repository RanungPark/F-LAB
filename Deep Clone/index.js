const cloneDeep = (target) => {
  if (typeof target !== 'object' || target === null || target === undefined) {
    return target;
  }

  if (Array.isArray(target)) {
    return target.map(value => cloneDeep(value));
  }

  const cloneObj = {};
  for (let key in target) {
    cloneObj[key] = cloneDeep(target[key]);
  }

  return cloneObj;
}

export default cloneDeep;