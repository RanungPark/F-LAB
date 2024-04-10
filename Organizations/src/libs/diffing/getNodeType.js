export function getNodeType(node) {
  if (node.nodeType === 1) return node.tagName.toLowerCase();

  else return node.nodeType;
}