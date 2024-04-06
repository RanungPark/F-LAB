import { Card } from "./Card.js";
import { Component } from "./Component.js";

export class CardList extends Component {
  render({ state }) {
    const setElementArr = [
      {
        tag: "main",
        id: "main-wrapper",
      },
      {
        tag: "ul",
        id: "card-list",
      },
    ];
    const [mainWrapper, cardList] = this.setElements(setElementArr);

    state.forEach(card => {
      const cardComponent = new Card().render({ state: card });
      this.appendElements(cardList, cardComponent);
    })

    this.appendElements(mainWrapper, cardList);

    return [mainWrapper, cardList];
  }
}