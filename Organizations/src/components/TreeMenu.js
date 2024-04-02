import { Component } from './Component.js';
import { TreeMenuInput } from './TreeMenuInput.js';
import { TreeMenuSpan } from './TreeMenuSpan.js';

export class TreeMenu extends Component {
  render(teams) {
    const treeMenuInput = new TreeMenuInput().render(teams.title)
    const treeMenuSpan = new TreeMenuSpan().render(teams.childs)

    this.appendChildElement(treeMenuInput, '', treeMenuSpan)

    teams.childs.forEach(team => {
      if (typeof team !== 'string') {
        const chileTeam = this.render(team)
        this.appendChildElement(treeMenuSpan, '', chileTeam)
      }
    });

    return treeMenuInput
  }
}