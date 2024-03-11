import { blogData } from '../mocks/data.js';
import BlogImg from './Blogimg.js';

async function Footer({ contentElement }) {
  const footerElement = document.createElement('footer');
  footerElement.className = 'footer';

  const footerWapperElement = document.createElement('div');
  footerWapperElement.className = 'footer_wapper';

  footerWapperElement.innerHTML = `
  <div class='footer_connect_wapper'>
    <div class='footer_connect'>
      <span class='footer_connect_title'>토스테크</span>
      <span>의견 보내기</span>
    </div>
    <div class='footer_connect'>
      <span class='footer_connect_title'>토스</span>
      <span>홈페이지</span>
      <span>회사 소개</span>
      <span>채용</span>
    </div>
    <div class='footer_connect'>
      <span class='footer_connect_title'>고객센터</span>
      <span>전화: 1599-4905 (24시간 연중무휴)</span>
      <span>이메일: support@toss.im</span>
      <span>카카오톡: @toss</span>
    </div>
  </div>
  <div class='footer_info'>
    <span class='footer_info_title'>㈜비바리퍼블리카</span>
    <span>Copyright © Viva Republica, Inc. All Rights Reserved.</span>
  </div>
  `

  const blogElement = document.createElement('div');
  blogElement.className = 'blog';

  for (const key in blogData) {
    BlogImg({ blogElement, imagePath: blogData[key] })
  }

  footerWapperElement.appendChild(blogElement);
  footerElement.appendChild(footerWapperElement);
  contentElement.appendChild(footerElement);
}

export default Footer;