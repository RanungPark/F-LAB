import { createElementHelper } from '../helpers/element.helpers.js';

function Item({ ListElement, id, title, content, imagePath, date, pathname }) {
  const ItemElement = createElementHelper('li', `list-item-${id}`);

  ItemElement.innerHTML =
    `<a class='list-wrapper' href=${pathname === '/' || pathname === '/tech' ? 'tech' : 'design'}/article/${id}>
      <img srcset=${imagePath} alt='thumbnail' class='item-img' loading='lazy' decoding='async'/>
      <div class='item-info'>
        <span class="item-title">${title}</span>
        <span class="item-content">${content}</span>
        <span class="item-date">${date}</span>
      </div>
    </a>
  `
  ListElement.appendChild(ItemElement);
}

export default Item;