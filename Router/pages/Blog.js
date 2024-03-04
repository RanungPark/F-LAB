class Blog {
  constructor({ $target, name = null, page = null }) {
    const $page = document.createElement('div')
    $page.className = 'Blog'

    if (name !== null && page !== null) {
      $page.innerHTML = `
      <h1>Blog</h1>
      <p>${name}블로그</p>
      <p>${page}page</p>
      `
    } else {
      $page.innerHTML = `<h1>Blog</h1>`
    }

    this.render = () => {
      if ($target.firstChild) {
        $target.removeChild($target.firstChild);
      }
      $target.appendChild($page);
    }
  }
}

export default Blog