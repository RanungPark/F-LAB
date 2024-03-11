import Header from '../compoents/Header.js';
import Aritcle from '../compoents/Article.js';
import { designDatas, techDatas } from '../mocks/data.js';
import Section from '../compoents/Section.js';
import Footer from '../compoents/Footer.js';

function ArticlePage({ targetElement, id = null }) {
  const { pathname } = location;
  const { title, imagePath } = pathname === `/tech/article/${id}` ? techDatas[id - 1] : designDatas[id - 1];

  const contentElement = document.createElement('div');
  contentElement.className = 'articlePage';

  Header({ contentElement });
  Aritcle({ contentElement, title, imagePath });
  Section({contentElement});
  Footer({contentElement});

  const render = () => {
    if (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }
    targetElement.appendChild(contentElement);
  }
  return render;
}

export default ArticlePage;