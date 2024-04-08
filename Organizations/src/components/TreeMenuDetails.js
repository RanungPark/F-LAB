import { Component } from "./Component.js";

export class TreeMenuDetails extends Component {
  render({ title, dispatch }) {
    const TMTitleWrapper = this.setRoot("tree-menu-details");

    const summary = this.getElement("summary");
    
    TMTitleWrapper.open = true;
    summary.textContent = title;

    return TMTitleWrapper;
  }
}