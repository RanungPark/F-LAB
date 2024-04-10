import { compareAttributes } from './compareAttributes.js';
import { getNodeType } from './getNodeType.js';

export function diffing(virtualDOM, DOM) {
  if (!DOM.hasChildNodes() && virtualDOM.hasChildNodes()) {
    for (let i = 0; i < virtualDOM.childNodes.length; i++) {
      DOM.append(virtualDOM.childNodes[i].cloneNode(true));
    }
  } else {
    if (virtualDOM.isEqualNode(DOM)) return;

    if (DOM.childNodes.length > virtualDOM.childNodes.length) {
      let count = DOM.childNodes.length - virtualDOM.childNodes.length;
      while (count > 0) {
        DOM.childNodes[DOM.childNodes.length - count].remove();
        count--;
      }
    }

    for (let i = 0; i < virtualDOM.childNodes.length; i++) {
      if (DOM.childNodes[i] === undefined) {
        DOM.append(virtualDOM.childNodes[i].cloneNode(true));
      } else if (
        getNodeType(virtualDOM.childNodes[i]) === getNodeType(DOM.childNodes[i])
      ) {
        if (virtualDOM.childNodes[i].nodeType === 3) {
          if (virtualDOM.childNodes[i].textContent !== DOM.childNodes[i].textContent) {
            DOM.childNodes[i].textContent = virtualDOM.childNodes[i].textContent;
          } else {
            compareAttributes(virtualDOM.childNodes[i], DOM.childNodes)
          };
        } else {
          DOM.childNodes[i].replaceWith(virtualDOM.childNodes[i].cloneNode(true));
        }
        
        if (virtualDOM.childNodes[i].nodeType !== 3) {
          diffing(
            virtualDOM.childNodes[i], DOM.childNodes[i]
          );
        }
      }
    }
  }
}