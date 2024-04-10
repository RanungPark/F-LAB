import { diffing } from '../libs/diffing/diifing.js';
import { render } from '../libs/render.js';
import { Component } from "./Component.js";
import { TreeMenu } from "./TreeMenu.js";

export class SideMenu extends Component {
  render({ state: teamsList, dispatch }) {
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
    const [TM] = render({ component: TMComponent, state: teamsList })

    this.appendElements(TMBody, TM);
    this.appendElements(asideWrapper, TMHeader, TMBody);

    const currnetasideWrapper = document.getElementById('aside-wrapper')
    if (currnetasideWrapper) {
      diffing(asideWrapper, currnetasideWrapper);
      return currnetasideWrapper;
    } else if (!currnetasideWrapper) {
      return asideWrapper;
    }
  }
}