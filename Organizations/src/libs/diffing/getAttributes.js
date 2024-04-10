export function getAttributes(node) {
  const attributes = node.attributes;
  const attrs = {};
  for (let i = 0; i < attributes.length; i++) {
    attrs[attributes[i].name] = attributes[i].value;
  }

  return attrs;
}
