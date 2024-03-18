export function createElementHelper(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

export function renderHelper(targetElement, contentElement) {
  if (targetElement.firstChild) {
    targetElement.removeChild(targetElement.firstChild);
  }
  targetElement.appendChild(contentElement);
}