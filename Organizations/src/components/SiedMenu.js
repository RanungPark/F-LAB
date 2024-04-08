import { Component } from "./Component.js";
import { TreeMenu } from "./TreeMenu.js";

export class SideMenu extends Component {
  render({ state, dispatch }) {
    const setElementArr = [
      {
        tag: "aside",
        id: "aside-wrapper",
      },
      {
        tag: "div",
        id: "tree-menu-header",
        content: "조직도"
      },
      {
        tag: "div",
        id: "tree-menu-body"
      },
    ];

    const [asideWrapper, TMHeader, TMBody] = this.setElements(setElementArr);

    const TMComponent = new TreeMenu();
    const TM = TMComponent.render(
      {
        teamState: state,
        dispatch,
      }
    )

    this.appendElements(TMBody, TM);
    this.appendElements(asideWrapper, TMHeader, TMBody);
    return [asideWrapper, TMHeader, TMBody];
  }
}