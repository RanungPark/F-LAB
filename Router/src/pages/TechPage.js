import Main from '../compoents/Main.js';
import Header from '../compoents/Header.js';
import Section from '../compoents/Section.js';
import Footer from '../compoents/Footer.js';

function TechPage({ targetElement }) {
  const contentElement = document.createElement('div');
  contentElement.className = 'techPage';

  Header({ contentElement });
  Main({ contentElement });
  Section({ contentElement });
  Footer({contentElement});


  const render = () => {
    if (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }
    targetElement.appendChild(contentElement);
  }

  return render;
}

export default TechPage;