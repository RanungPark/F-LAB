function Blog({ targetElement, name = null, page = null }) {
  const contentElement = document.createElement('div');
  contentElement.className = 'Blog';

  if (name !== null && page !== null) {
    contentElement.innerHTML = `
    <h1>Blog</h1>
    <p>${name}블로그</p>
    <p>${page}page</p>
    `
  } else {
    contentElement.innerHTML = `<h1>Blog</h1>`
  }
  const render = () => {
    if (targetElement.firstChild) {
      targetElement.removeChild(targetElement.firstChild);
    }
    targetElement.appendChild(contentElement);
  }

  return render;
}

export default Blog;