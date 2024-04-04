import { CardList } from "./Components/CardList.js";
import { SideMenu } from "./Components/SiedMenu.js";
import { event } from "./libs/eventBus.js";

export default function app() {
  const { cards, teamsList } = event.getState()
  const target = document.createElement("div")
  target.id = "target"

  const newSideMewnu = new SideMenu();
  const newCardList = new CardList();

  if (Object.keys(teamsList).length !== 0) {
    newSideMewnu.render(target, teamsList);
  }
  newCardList.render(target, cards);

  const app = document.getElementById("app");

  if (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  app.appendChild(target);
}
