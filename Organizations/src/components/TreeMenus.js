import { Component } from "./Component.js";
import { TreeMenu } from "./TreeMenu.js";

export class TreeMenus extends Component {
  render(target, state) {
    const treeMenus = this.setElement("ul", { className: "tree-menus" })
    const newTreeMenu = new TreeMenu().render(state)

    this.appendChildElement(target, treeMenus, newTreeMenu)
  }
}


