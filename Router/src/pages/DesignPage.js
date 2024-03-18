import Main from '../compoents/Main.js';
import createPage from '../helpers/createPage.helpers.js';

function DesignPage({ targetElement }) {
  return createPage({ targetElement, tag: 'div', className: 'designPage' }, Main)
}

export default DesignPage;
