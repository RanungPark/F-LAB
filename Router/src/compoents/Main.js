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


  pathname === '/' || pathname === '/tech' ?
    techDatas.map(({ id, title, content, imagePath, date }) => Item({
      ListElement, id, title, content, imagePath, date, pathname
    }))
    : designDatas.map(({ id, title, content, imagePath, date }) => Item({
      ListElement, id, title, content, imagePath, date, pathname
    }));

  contentElement.appendChild(mainElement);
}

export default Main;