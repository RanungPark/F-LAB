import { teams } from '../data/teams.js';
import { Component } from './Component.js';
import { TreeMenu } from './TreeMenu.js';

export class TreeMenus extends Component {
  render(target) {
    const treeMenus = this.setElement('ul', { className: 'tree-menus' })
    const newTreeMenu = new TreeMenu().render(teams)

    this.appendChildElement(target, treeMenus, newTreeMenu)
  }
}


