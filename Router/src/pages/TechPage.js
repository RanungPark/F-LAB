import Main from '../compoents/Main.js';
import createPage from '../helpers/createPage.helpers.js';

function TechPage({ targetElement }) {
  return createPage({ targetElement, tag: 'div', className: 'techPage' }, Main)
}

export default TechPage;
