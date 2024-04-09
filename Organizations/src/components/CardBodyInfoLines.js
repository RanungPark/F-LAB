import { iconClassName } from '../data/iconClassName.js';
import { CardBodyInfo } from './CardBodyInfo.js';
import { Component } from './Component.js';

export class CardBodyInfoLines extends Component {
  render({ state: bodyInfo }) {
    const bodyInfoLines = [];
    for (const key in iconClassName) {
      const keyInText = "body_info_";
      if (key.includes(keyInText)) {
        const bodyInfoLine = this.setElement("div", { id: "body-info-line" });
        const content = bodyInfo[key.slice(keyInText.length)];

        const bodyInfoComponent = new CardBodyInfo();
        
        const [bodyInfoIcon, bodyInfoContent] = bodyInfoComponent.render(
          {
            value: iconClassName[key],
            content,
          }
        );

        this.appendElements(bodyInfoLine, bodyInfoIcon, bodyInfoContent);
        bodyInfoLines.push(bodyInfoLine);
      }
    }
    return bodyInfoLines;
  }
}