import { Component } from "./Component.js";
import { TreeMenu } from "./TreeMenu.js";

export class TreeMenus extends Component {
  render({ state, dispatch }) {
    const TMWrapper = this.setElement("ul", { className: "tree-menus" });

    const TMComponent = new TreeMenu();
    const TM = TMComponent.render(
      {
        teamState: state,
        dispatch,
      }
    )

    this.appendElements(TMWrapper, TM);
    return TMWrapper;
  }
}


