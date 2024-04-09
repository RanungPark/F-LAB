import { actions } from "../libs/eventbus/actions.js";
import { Component } from "./Component.js";

export class TreeMenuA extends Component {
  render({ state: childs, dispatch }) {
    const TMChiledsWrapper = this.setElement("ul", { className: "ulElement" });

    childs.forEach(child => {
      if (typeof child.teamCode !== "undefined") {
        const treeMenuA = this.setRoot("tree-menu-a");
        const a = this.getElement("a");
        a.textContent = child.teamName;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          dispatch(actions.selectTeam({
            team: child.teamCode,
            action: actions.fixCards,
            dispatch,
          }))
        })
        this.appendElements(TMChiledsWrapper, treeMenuA);
      }
    });

    return TMChiledsWrapper;
  }
}