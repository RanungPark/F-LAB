import { CardList } from './Components/CardList.js';
import { SideMenu } from './Components/SiedMenu.js';
import { event } from './libs/eventBus.js';

export default function app(target) {
  const newSideMewnu = new SideMenu();
  const newCardList = new CardList();

  newSideMewnu.render(target);
  newCardList.render(target, event.getState().cards)
}