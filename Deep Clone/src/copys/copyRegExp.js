function copyRegExp(value) {
  return new RegExp(value.valueOf());
}

export default copyRegExp;