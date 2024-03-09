function Aritcle({ contentElement, title, imagePath }) {
  const divElement = document.createElement('div');
  divElement.className = 'article'

  divElement.innerHTML =
    `
    <div class='article_wapper'>
      <img srcset=${imagePath} alt='thumbnail' class='article_img' decoding="async"/>
      <span class="article_title">${title}</span>
    </div>
  `
  contentElement.appendChild(divElement);
}

export default Aritcle;