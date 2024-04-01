import { CardList } from './Components/CardList.js';
import { SideTable } from './Components/SideTable.js';
import { event } from './libs/eventBus.js';

export default function app(target) {
  const sideTable = new SideTable();
  const cardList = new CardList();

  sideTable.render(target);
  cardList.render(target, event.getState().cards)
}