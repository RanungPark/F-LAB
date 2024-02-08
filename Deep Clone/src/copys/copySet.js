function copySet(value) {
  const copyValue = [...value];

  return new Set(copyValue);
}

export default copySet;