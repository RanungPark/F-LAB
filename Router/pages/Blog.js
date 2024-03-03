class Blog {
  constructor({ $target }) {

    const $page = document.createElement('div')
    $page.className = 'Blog'

    $page.innerHTML = '<h1>Blog</h1>'

    this.render = () => {
      if ($target.firstChild) {
        $target.removeChild($target.firstChild);
      }
      $target.appendChild($page);
    }
  }
}

export default Blog