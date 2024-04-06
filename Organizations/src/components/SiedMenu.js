import { Component } from "./Component.js";
import { TreeMenus } from "./TreeMenus.js";

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

    const TMWrapperComponent = new TreeMenus();
    const TMWrapper = TMWrapperComponent.render({
      state,
      dispatch
    });

    this.appendElements(TMBody, TMWrapper);
    this.appendElements(asideWrapper, TMHeader, TMBody);
    return [asideWrapper, TMHeader, TMBody];
  }
}