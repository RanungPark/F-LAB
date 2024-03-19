import { createElementHelper } from '../helpers/element.helpers.js';

function Header({ contentElement }) {
  const headerElement = createElementHelper('nav', 'navbar');

  headerElement.innerHTML = `
  <div class='navbar-content'>
    <div class='navbar-logo'>
      <img src='/src/mocks/Toss_Symbol_Primary.png' class='log-img' decoding='async'>
      <span class='log-bold'>toss</span>
      <span>tech</span>
    </div>
    <ul class='navbar-list'>
      <li class='navbar-item'>
        <a href='/design'>디자인</a>
      </li>
      <li class='navbar-item'>
        <a href='/tech'>개발</a>
      </li>
      <li class='navbar-item'>
        <button class='btn'>채용 바로가기</button>
      </li>
    </ul>
  </div>
`
  contentElement.appendChild(headerElement);
}

export default Header;