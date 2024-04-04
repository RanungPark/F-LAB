import { iconClassName } from "../data/iconClassName.js";
import { CardBodyInfo } from "./CardBodyInfo.js";
import { Component } from "./Component.js";

export class Card extends Component {
  render(target, { state }) {
    const card = this.setRoot("card");
    card.id = "card"
    card.className = `card-${state.id}`

    const getElementArr = [".profile", ".header-info", ".team", ".body-info"]
    const [profile, headerInfo, team, bodyInfo] = this.getElements(getElementArr)

    this.setIconElement({ target: profile, className: iconClassName.user });

    for (const key in state.headerInfo) {
      const className = `header-info-${key}`;
      const content = state.headerInfo[key];

      const headerInfoLine = this.setElement("span", { className, content });

      this.appendChildElement(headerInfo, headerInfoLine)
    }

    team.textContent = state.team

    for (const key in iconClassName) {
      const keyInText = "body_info_"
      if (key.includes(keyInText)) {
        const bodyInfoLine = this.setElement("div", { id: "body-info-line" })
        const content = state.bodyInfo[key.slice(keyInText.length)]

        new CardBodyInfo().render(bodyInfoLine, iconClassName[key], content)

        this.appendChildElement(bodyInfo, bodyInfoLine)
      }
    }

    this.appendChildElement(target, card)
  }
}