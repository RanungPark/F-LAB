import Body from '../compoents/Body.js';
import Header from '../compoents/Header.js';

function TechPage({ targetElement }) {
  const contentElement = document.createElement('div');
  contentElement.className = 'techPage';

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

export default TechPage;