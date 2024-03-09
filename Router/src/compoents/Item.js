function Item({ ListElement, id, title, content, imagePath, date, pathname }) {
  const ItemElement = document.createElement('li');
  ItemElement.className = `list_item_${id}`
  ItemElement.innerHTML =
    `<a class='list_wrapper' href=${pathname === '/' || pathname === '/tech' ? 'tech' : 'design'}/article/${id}>
      <img srcset=${imagePath} alt='thumbnail' class='item_img' decoding="async" loading="lazy"/>
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