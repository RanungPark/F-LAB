import { Component } from "./Component.js";

export class CardBodyInfo extends Component {
  render({ value, content }) {
    const id = "card-body-info-image";
    const className = value;
    const contentId = `card-body-info-content`;

    const bodyInfoIcon = this.setIconElement({ id, className, src: value });
    const bodyInfoContent = this.setElement("div", { id: contentId, content });
    return [bodyInfoIcon, bodyInfoContent];
  }
}