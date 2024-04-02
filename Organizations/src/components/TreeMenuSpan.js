import { actions } from '../libs/actions.js';
import { event } from '../libs/eventBus.js';
import { Component } from './Component.js';

export class TreeMenuSpan extends Component {
  render(childs) {
    const ulElement = this.setElement('ul', { className: 'ulElement' })

    childs.forEach(child => {
      if (typeof child === 'string') {
        const treeMenuSpan = this.setRoot('tree-menu-span')
        const span = this.getElement('span')
        span.textContent = child
        span.addEventListener('click', () => {event.dispatch(actions.selectTeam(child))})
        this.appendChildElement(ulElement, treeMenuSpan)
      }
    });

    return ulElement
  }
}