import Footer from '../compoents/Footer.js';
import Header from '../compoents/Header.js';
import Section from '../compoents/Section.js';
import { createElementHelper, renderHelper } from './element.helpers.js';
import { isHTMLElement } from './typeCheck.helpers.js';

function createPage({ targetElement, tag, className }, bodyCompoents, title = '', imagePath = '') {
  if (!isHTMLElement(targetElement)) {
    console.error('Error: targetElement 요소는 HTMLElement의 인스턴스여야 합니다.');
    return;
  }
  
  const contentElement = createElementHelper(tag, className);

  Promise.resolve(Header({ contentElement }))
    .then(
      title && imagePath ? bodyCompoents({ contentElement, title, imagePath }) : bodyCompoents({ contentElement })
    )
    .then(Section({ contentElement }))
    .then(Footer({ contentElement }))
    .catch((error) => {
      console.error('Error render :', error);
    });

  return renderHelper(targetElement, contentElement)
}

export default createPage;
