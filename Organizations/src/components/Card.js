import { Component } from './Component.js';

export class Card extends Component {
  constructor() {
    super()
  }

  render(target) {
    const cardList = this.setRoot('card-list');

    const profile = this.getElement('profile');
    const headerInfo = this.getElement('header-info');
    const team = this.getElement('team');
    const bodyInfo = this.getElement('body-info');

    profile.textContent = 'profile'
    headerInfo.textContent = 'header-info'
    team.textContent = 'team'
    bodyInfo.textContent = 'bodyInfo'

    target.appendChild(cardList)
  }
}