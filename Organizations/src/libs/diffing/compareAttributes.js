import { getAttributes } from './getAttributes.js';

export function compareAttributes(virtualDOM, DOM) {
  const virtualDOMAttributes = getAttributes(virtualDOM);
  const DOMAttributes = getAttributes(DOM);

  const vitualAttributesKeys = Object.keys(virtualDOMAttributes);
  const DOMAttributesKeys = Object.keys(DOMAttributes);

  for (let i = 0; i < vitualAttributesKeys.length; i++) {
    const attr = vitualAttributesKeys[i];

    if (!DOMAttributes[attr]) {
      DOM.setAttribute(attr, virtualDOMAttributes[attr]);
    } else if (DOMAttributes[attr] !== virtualDOM[attr]) {
      DOM.setAttribute(attr, virtualDOMAttributes[attr]);

      if (attr === 'style') {
        const virtualDOMStyle = virtualDOMAttributes[style];
        const DOMStyle = DOMAttributes[style];
        
        const virtualDOMStyleKeys = Object.keys(virtualDOMStyle);
        const DOMStyleKeys = Object.keys(DOMStyle);

        for (let i = 0; i < virtualDOMStyleKeys.length; i++) {
          const styleKey = virtualDOMStyleKeys[i];

          if (!DOMStyle[styleKey]) {
            DOM.style[styleKey] = virtualDOMStyle[styleKey];
          }
          else if (DOMStyle[styleKey] !== virtualDOMStyle[styleKey]) {
            DOM.style[styleKey] = virtualDOMStyle[styleKey];
          }
        }

        for (let i = 0; i < DOMStyleKeys.length; i++) {
          const styleKey = DOMStyleKeys[i];

          if (!virtualDOMStyle[styleKey])
            DOM.style[styleKey] = '';
        }
      }
    }
  }

  for (let i = 0; i < DOMAttributesKeys.length; i++) {
    const attr = DOMAttributesKeys[i];

    if (!virtualDOMAttributes[attr]) {
      DOM.removeAttribute(attr);
    }
  }
}