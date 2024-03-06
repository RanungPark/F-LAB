class Home {
  constructor({ targetElement }) {
    const contentElement = document.createElement('div')
    contentElement.className = 'Home'
    contentElement.innerHTML =
      `<h1>Home</h1>
      <p>홈 화면입니다.</p>
    `

    this.render = () => {
      if (targetElement.firstChild) {
        targetElement.removeChild(targetElement.firstChild);
      }
      targetElement.appendChild(contentElement);
    }
  }
}

export default Home