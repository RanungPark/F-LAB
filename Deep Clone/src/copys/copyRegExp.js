function copyRegExp(value) {
  const copyValue = value.valueOf();

  return new RegExp(copyValue);
}

export default copyRegExp;