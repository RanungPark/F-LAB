import { iconClassName } from "../data/iconClassName.js";
import { CardBodyInfo } from "./CardBodyInfo.js";
import { CardBodyInfoLines } from './CardBodyInfoLines.js';
import { CardHeaderInfo } from './CardHeaderInfo.js';
import { Component } from "./Component.js";

export class Card extends Component {
  render({ state }) {
    const card = this.setRoot("card");
    card.id = "card";
    card.className = `card-${state.id}`;

    const getElementArr = [".profile", ".header-info", ".team", ".body-info"];
    const [profileWrapper, headerInfoWrapper, teamWrapper, bodyInfoWrapper] = this.getElements(getElementArr);

    this.setIconElement({ target: profileWrapper, className: iconClassName.user });

    const headerInfoLinesComponent = new CardHeaderInfo();
    const haderInfoLines = headerInfoLinesComponent.render({ headerInfo: state.headerInfo });
    this.appendChildsElement({ target: headerInfoWrapper, childs: haderInfoLines });

    teamWrapper.textContent = state.team;

    const bodyInfoLinesComponent = new CardBodyInfoLines();
    const bodyInfoLines = bodyInfoLinesComponent.render({ bodyInfo: state.bodyInfo });
    this.appendChildsElement({ target: bodyInfoWrapper, childs: bodyInfoLines });

    return card;
  }
}