import { actions } from "../libs/actions.js";
import { Component } from "./Component.js";

export class TreeMenuSpan extends Component {
  render({ childs, dispatch }) {
    const TMChiledsWrapper = this.setElement("ul", { className: "ulElement" });

    childs.forEach(child => {
      if (typeof child.teamCode !== "undefined") {
        const treeMenuSpan = this.setRoot("tree-menu-span");
        const span = this.getElement("span");
        span.textContent = child.teamName;
        span.addEventListener("click", () => {
          dispatch(actions.selectTeam({
            team: child.teamCode,
            action: actions.FixCards,
            dispatch,
          }))
        })
        this.appendElements(TMChiledsWrapper, treeMenuSpan);
      }
    });

    return TMChiledsWrapper;
  }
}