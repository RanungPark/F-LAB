import { Card } from "./Card.js";
import { Component } from "./Component.js";

export class CardList extends Component {
  render(target, state) {
    const setElementArr = [
      {
        tag: "main",
        id: "main-wrapper",
      },
      {
        tag: "ul",
        id: "card-list"
      },
    ]
    const [mainWrapper, cardList] = this.setElements(setElementArr)

    state.forEach(card => {
      new Card().render(cardList, { state: card });
    })

    this.appendChildElement(target, mainWrapper, cardList)
  }
}