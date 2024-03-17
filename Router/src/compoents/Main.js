import { designDatas, techDatas } from '../mocks/data.js';
import Item from './Item.js';

function Main({ contentElement }) {
  const { pathname } = location;

  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const ListElement = document.createElement('ul');
  ListElement.className = 'mainList';

  mainElement.innerHTML = `
    <span class = 'mainTitle'>${pathname === '/' || pathname === '/tech' ? '개발' : '디자인'}</span>
  `
  mainElement.appendChild(ListElement);

  const url = pathname === '/' || pathname === '/tech' ? '../../public/data/techdatas.json' : '../../public/data/designdatas.json';

  fetchFun(url, ListElement, pathname)

  contentElement.appendChild(mainElement);
}


function fetchFun(url, ListElement, pathname) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      response.data.map(({ id, title, content, imagePath, date }) => Item({
        ListElement, id, title, content, imagePath, date, pathname
      }));
    });
}

export default Main;