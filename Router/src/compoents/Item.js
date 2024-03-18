import { createElementHelper } from '../helpers/element.helpers.js';

function Item({ ListElement, id, title, content, imagePath, date, pathname }) {
  const ItemElement = createElementHelper('li', `list_item_${id}`);

  ItemElement.innerHTML =
    `<a class='list_wrapper' href=${pathname === '/' || pathname === '/tech' ? 'tech' : 'design'}/article/${id}>
      <img srcset=${imagePath} alt='thumbnail' class='item_img' loading="lazy"/>
      <div class='item_info'>
        <span class="item_title">${title}</span>
        <span class="item_content">${content}</span>
        <span class="item_date">${date}</span>
      </div>
    </a>
  `
  ListElement.appendChild(ItemElement);
}

export default Item;