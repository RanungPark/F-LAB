import { dataPath } from '../common/dataPath.js';
import { createElementHelper } from '../helpers/element.helpers.js';
import { blogData } from '../mocks/data.js';
import BlogImg from './Blogimg.js';

function Footer({ contentElement }) {
  const footerElement = createElementHelper('footer', 'footer');
  const footerWapperElement = createElementHelper('div', 'footer-wapper');
  const blogElement = createElementHelper('div', 'blog');

  footerWapperElement.innerHTML = `
    <div class='footer-connect-wapper'>
      <div class='footer-connect'>
        <span class='footer-connect-title'>토스테크</span>
        <span>의견 보내기</span>
      </div>
      <div class='footer-connect'>
        <span class='footer-connect-title'>토스</span>
        <span>홈페이지</span>
        <span>회사 소개</span>
        <span>채용</span>
      </div>
      <div class='footer-connect'>
        <span class='footer-connect-title'>고객센터</span>
        <span>전화: 1599-4905 (24시간 연중무휴)</span>
        <span>이메일: support@toss.im</span>
        <span>카카오톡: @toss</span>
      </div>
    </div>
    <div class='footer-info'>
      <span class='footer-info-title'>㈜비바리퍼블리카</span>
      <span>Copyright © Viva Republica, Inc. All Rights Reserved.</span>
    </div>
  `
  fetchFun(dataPath.blogDatas, blogElement)
    .then(footerWapperElement.appendChild(blogElement))
    .then(footerElement.appendChild(footerWapperElement))
    .then(contentElement.appendChild(footerElement))
}

function fetchFun(path, blogElement) {
  return fetch(path)
    .then((response) => response.json())
    .then((response) => {
      for (const key in response.data) {
        BlogImg({ blogElement, imagePath: blogData[key] })
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });;
}

export default Footer;
