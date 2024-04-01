import { imageRouter } from '../data/imageRouter.js';
import { CardBodyInfo } from './CardBodyInfo.js';
import { Component } from './Component.js';

export class Card extends Component {
  constructor() {
    super()
  }

  render(target, { state }) {
    const card = this.setRoot('card');
    card.id = 'card'
    card.className = `card-${state.id}`

    const profile = this.getElement('profile');
    const headerInfo = this.getElement('header-info');
    const team = this.getElement('team');
    const bodyInfo = this.getElement('body-info');

    this.setImageElement({ target: profile, className: 'profile-image', src: imageRouter.user });

    for (const key in state.headerInfo) {
      const className = `header-info-${key}`;
      const content = state.headerInfo[key];
      const headerInfoLine = this.setElement('span', { className, content });
      this.appendChildElement(headerInfo, headerInfoLine)
    }

    team.textContent = state.team

    for (const key in imageRouter) {
      const keyInText = 'body_info_'
      if (key.includes(keyInText)) {
        console.log(key)
        const newCardBodyInfo = new CardBodyInfo();
        const bodyInfoLine = this.setElement('div', { id: 'body-info-line' })
        const content = state.bodyInfo[key.slice(keyInText.length)]
        newCardBodyInfo.render(bodyInfoLine, key, imageRouter[key], content)
        this.appendChildElement(bodyInfo, bodyInfoLine)
      }
    }

    this.appendChildElement(target, card)
  }
}