import { isHTMLElement, isString } from './typeCheck.helpers';

export function createElementHelper(tag, className) {
  if (!isString(tag)) {
    console.error('Error: tag 변수는 string이여야 합니다.');
    return;
  }

  if (!isString(className)) {
    console.error('Error: className 변수는 string이여야 합니다.');
    return;
  }

  const element = document.createElement(tag);
  element.className = className;
  return element;
}

export function renderHelper(targetElement, contentElement) {
  if (!isHTMLElement(targetElement)) {
    console.error('Error: targetElement 요소는 HTMLElement의 인스턴스여야 합니다.');
    return;
  }

  if (!isHTMLElement(targetElement)) {
    console.error('Error: contentElement 요소는 HTMLElement의 인스턴스여야 합니다.');
    return;
  }

  if (targetElement.firstChild) {
    targetElement.removeChild(targetElement.firstChild);
  }
  targetElement.appendChild(contentElement);
}