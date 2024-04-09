import { CardList } from "./Components/CardList.js";
import { SideMenu } from "./Components/SiedMenu.js";
import { event } from "./libs/eventbus/eventBus.js";
import { render } from './libs/render.js';

export default function app() {
  const { cards, teamsList } = event.getState();
  const app = document.getElementById("app");

  const sideMenuComponent = new SideMenu();
  const cardListComponent = new CardList();

  if (Object.keys(teamsList).length !== 0) {
    const componentsWrapper = render({ component: sideMenuComponent, state: teamsList }, { component: cardListComponent, state: cards })

    componentsWrapper.forEach(component => app.appendChild(component))
  }
}
