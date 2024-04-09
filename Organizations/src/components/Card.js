import { iconClassName } from "../data/iconClassName.js";
import { render } from '../libs/render.js';
import { CardBodyInfoLines } from './CardBodyInfoLines.js';
import { CardHeaderInfo } from './CardHeaderInfo.js';
import { Component } from "./Component.js";

export class Card extends Component {
  render({ state: cardState }) {
    const card = this.setRoot("card");
    card.id = "card";
    card.className = `card-${cardState.id}`;

    const getElementArr = [".profile", ".header-info", ".team", ".body-info"];
    const [profileWrapper, headerInfoWrapper, teamWrapper, bodyInfoWrapper] = this.getElements(getElementArr);

    this.setIconElement({ target: profileWrapper, className: iconClassName.user });

    const headerInfoLinesComponent = new CardHeaderInfo();
    const [haderInfoLines] = render({ component: headerInfoLinesComponent, state: cardState.headerInfo })
    this.appendChildsElement({ target: headerInfoWrapper, childs: haderInfoLines });

    teamWrapper.textContent = cardState.team;

    const bodyInfoLinesComponent = new CardBodyInfoLines();
    const [bodyInfoLines] = render({ component: bodyInfoLinesComponent, state: cardState.bodyInfo })
    this.appendChildsElement({ target: bodyInfoWrapper, childs: bodyInfoLines });

    return card;
  }
}