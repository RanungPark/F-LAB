function copyStringObject(value) {
  const copyValue = value.valueOf();

  return new String(copyValue);
}

export default copyStringObject;
