import { diffing } from '../libs/diffing/diifing.js';
import { render } from '../libs/render.js';
import { Card } from "./Card.js";
import { Component } from "./Component.js";

export class CardList extends Component {
  render({ state: cards }) {
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

    cards.forEach(card => {
      const cardComponent = new Card();
      const [cardWrapper] = render({ component: cardComponent, state: card })
      this.appendElements(cardList, cardWrapper);
    })

    this.appendElements(mainWrapper, cardList);

    const currnetMainWrapper = document.getElementById('main-wrapper')
    if (currnetMainWrapper) {
      diffing(mainWrapper, currnetMainWrapper);
      return currnetMainWrapper;
    } else if (!currnetMainWrapper) {
      return mainWrapper;
    }
  }
}