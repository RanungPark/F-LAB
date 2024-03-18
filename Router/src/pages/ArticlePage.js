import { dataPath } from '../common/dataPath.js';
import Article from '../compoents/Article.js';
import createPage from '../helpers/createPage.helpers.js';

function ArticlePage({ targetElement, id = null }) {
  const { pathname } = location;
  const path = pathname === `/tech/article/${id}` ? dataPath.techDatas : dataPath.designDatas;

  fetch(path)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data)
      const { title, imagePath } = response.data[id - 1]
      return createPage({ targetElement, tag: 'div', className: 'articlePage' }, Article, title, imagePath)
    })
}

export default ArticlePage;
