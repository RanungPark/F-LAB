import { Component } from './Component.js';

export class CardBodyInfo extends Component {
  render(target, key, value, content) {
    const id = 'card-body-info-image';
    const className = `card-body-info-${key}`;
    const contentId = `card-body-info-content`

    const ImageElement = this.setImageElement({ id, className, src: value });
    const contentElement = this.setElement('div', { id: contentId, content })
    this.appendChildElement(target, ImageElement, contentElement)
  }
}