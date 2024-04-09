import { Component } from './Component.js';

export class CardHeaderInfo extends Component {
  render({ state: headerInfo }) {
    const headerInfoLines = [];
    for (const key in headerInfo) {
      const className = `header-info-${key}`;
      const content = headerInfo[key];

      const headerInfoLine = this.setElement("span", { className, content });
      headerInfoLines.push(headerInfoLine);
    }
    return headerInfoLines;
  }
}