class Home {
  constructor({ $target }) {
    const $page = document.createElement('div')
    $page.className = 'Home'
    $page.innerHTML =
      `<h1>Home</h1>
      <p>홈 화면입니다.</p>
    `

    this.render = () => {
      if ($target.firstChild) {
        $target.removeChild($target.firstChild);
      }
      $target.appendChild($page);
    }
  }
}

export default Home