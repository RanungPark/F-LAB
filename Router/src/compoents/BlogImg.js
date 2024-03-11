function BlogImg({ blogElement, imagePath }) {
  const imgElement = document.createElement('img');
  imgElement.className = 'blog_img'
  imgElement.srcset = `${imagePath}`;
 
  blogElement.appendChild(imgElement);
}

export default BlogImg; 