import { Component } from "./Component.js";

export class CardBodyInfo extends Component {
  render(target, value, content) {
    const id = "card-body-info-image";
    const className = value;
    const contentId = `card-body-info-content`

    const ImageElement = this.setIconElement({ id, className, src: value });
    const contentElement = this.setElement("div", { id: contentId, content })
    this.appendChildElement(target, "", ImageElement, contentElement)
  }
}
