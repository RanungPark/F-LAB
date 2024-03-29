import { createElementHelper } from '../helpers/element.helpers.js';

function BlogImg({ blogElement, imagePath }) {
  const imgElement = createElementHelper('img', 'blog-img');

  imgElement.srcset = `${imagePath}`;

  blogElement.appendChild(imgElement);
}

export default BlogImg; 