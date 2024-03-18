import { createElementHelper } from '../helpers/element.helpers.js';

function Section({ contentElement }) {
  const sectionElement = createElementHelper('section', 'section');

  sectionElement.innerHTML = `
  <image class='section_img' src="https://static.toss.im/3d/website_code_blue_alpha.png" decoding="async">
  <div class='section_content'>
    <div class='section_title'>토스팀이 만드는 수많은 혁신의 순간들</div>
    <div class='section_sentence'>
      <span>당신과 함께 만들고 싶습니다.</span>
      <span>지금, 토스팀에 합류하세요.</span>
    </div>
    <button class='btn'>채용 중인 공고 보기</button>
  </div>
  `
  contentElement.appendChild(sectionElement);
}

export default Section