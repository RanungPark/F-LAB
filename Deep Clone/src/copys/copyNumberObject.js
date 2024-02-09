function copyNumberObject(value) {
  const copyValue = value.valueOf();

  return new Number(copyValue);
}

export default copyNumberObject;
