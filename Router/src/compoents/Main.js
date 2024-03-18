import { dataPath } from '../common/dataPath.js';
import { createElementHelper } from '../helpers/element.helpers.js';
import Item from './Item.js';

function Main({ contentElement }) {
  const { pathname } = location;
  const mainElement = createElementHelper('main', 'main');
  const ListElement = createElementHelper('ul', 'mainList');
  const path = pathname === '/' || pathname === '/tech' ? dataPath.techDatas : dataPath.designDatas;;

  mainElement.innerHTML = `
    <span class = 'mainTitle'>
      ${pathname === '/' || pathname === '/tech' ? '개발' : '디자인'}
    </span>
  `

  fetchFun(path, ListElement, pathname)
    .then(mainElement.appendChild(ListElement))
    .then(contentElement.appendChild(mainElement))
}

function fetchFun(path, ListElement, pathname) {
  return fetch(path)
    .then((response) => response.json())
    .then((response) => {
      response.data.map(({ id, title, content, imagePath, date }) => Item({
        ListElement, id, title, content, imagePath, date, pathname
      }));
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });;
}

export default Main;