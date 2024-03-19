import { createElementHelper } from '../helpers/element.helpers.js';

function Aritcle({ contentElement, title, imagePath }) {
  const divElement = createElementHelper('div', 'article');

  divElement.innerHTML = `
    <div class='article-wapper'>
      <img srcset=${imagePath} alt='thumbnail' class='article-img' decoding="async"/>
      <span class="article-title">${title}</span>
    </div>
  `
  contentElement.appendChild(divElement);
}

export default Aritcle;