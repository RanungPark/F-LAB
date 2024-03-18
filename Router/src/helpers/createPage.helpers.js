import Footer from '../compoents/Footer.js';
import Header from '../compoents/Header.js';
import Section from '../compoents/Section.js';
import { createElementHelper, renderHelper } from './element.helpers.js';

function createPage({ targetElement, tag, className }, bodyCompoents, title = '', imagePath = '') {
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

