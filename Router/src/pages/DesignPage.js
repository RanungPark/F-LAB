import Body from '../compoents/Body.js';
import Header from '../compoents/Header.js';

function DesignPage({ targetElement }) {
  const contentElement = document.createElement('div');
  contentElement.className = 'designPage';

  Header({ contentElement });
  Body({ contentElement });

  const render = () => {
    if (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }
    targetElement.appendChild(contentElement);
  }

  return render;
}

export default DesignPage;