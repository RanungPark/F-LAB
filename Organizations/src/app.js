import { CardList } from './Components/CardList.js';
import { SideMenu } from './Components/SiedMenu.js';
import { event } from './libs/eventBus.js';
import { getcard } from './libs/getcard.js';

export default function app() {
  const { cards } = event.getState()
  const target = document.createElement('div')
  target.id = 'target'

  const newSideMewnu = new SideMenu();
  const newCardList = new CardList();


  newSideMewnu.render(target);
  newCardList.render(target, cards);

  const app = document.getElementById('app')

  if (app.firstChild) {
    app.removeChild(app.firstChild)
  }
  app.appendChild(target)
}

event.subscribe(getcard, 'model')
event.subscribe(app, 'view')