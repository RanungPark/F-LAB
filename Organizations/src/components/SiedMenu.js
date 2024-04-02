import { Component } from './Component.js';
import { TreeMenus } from './TreeMenus.js';

export class SideMenu extends Component {
  render(target, state) {
    const setElementArr = [
      {
        tag: 'aside',
        id: 'aside-wrapper',
      },
      {
        tag: 'div',
        id: 'tree-menu-header',
        content: '조직도'
      },
      {
        tag: 'div',
        id: 'tree-menu-body'
      }
    ]

    const [asideWrapper, treeMenuHeader, treeMenuBody] = this.setElements(setElementArr)

    new TreeMenus().render(treeMenuBody)

    this.appendChildElement(target, asideWrapper, treeMenuHeader, treeMenuBody)
  }
}