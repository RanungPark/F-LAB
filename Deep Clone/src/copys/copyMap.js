function copyMap(value) {
  const copyValue = [...value];

  return new Map(copyValue);
}

export default copyMap;