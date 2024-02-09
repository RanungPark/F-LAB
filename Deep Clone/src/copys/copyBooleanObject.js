function copyBooleanObject(value) {
  const copyValue = value.valueOf();

  return new Boolean(copyValue);
}

export default copyBooleanObject;
