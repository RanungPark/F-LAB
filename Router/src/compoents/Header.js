function Header({ contentElement }) {
  const headerElement = document.createElement('nav');
  headerElement.className = 'navbar';
  headerElement.innerHTML =
    `<div class='navbar_content'>
      <div class='navbar_logo'>
        <img src='/src/mocks/Toss_Symbol_Primary.png' class='log_img' decoding='async'>
        <span class='log_bold'>toss</span>
        <span>tech</span>
      </div>
      <ul class='navbar_list'>
        <li class='navbar_item'>
          <a href='/design'>디자인</a>
        </li>
        <li class='navbar_item'>
          <a href='/tech'>개발</a>
        </li>
        <li class='navbar_item'>
          <button class='btn'>채용 바로가기</button>
        </li>
      </ul>
    </div>
  `
  contentElement.appendChild(headerElement);
}

export default Header;