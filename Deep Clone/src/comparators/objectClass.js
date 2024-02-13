function objectClass(value) {
  const toString = Object.prototype.toString;

  return toString.call(value);
}

export default objectClass;