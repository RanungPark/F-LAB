import Header from '../compoents/Header.js';

function Home({ targetElement }) {
  const contentElement = document.createElement('div');
  contentElement.className = 'Home';
  Header({ contentElement });


  const render = () => {
    if (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }
    targetElement.appendChild(contentElement);
  }

  return render;
}

export default Home;