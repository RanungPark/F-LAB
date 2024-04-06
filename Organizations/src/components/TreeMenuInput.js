import { Component } from "./Component.js";

export class TreeMenuInput extends Component {
  render({ title, dispatch }) {
    const TMTitleWrapper = this.setRoot("tree-menu-input");

    const getElementArr = ["input", "label"];
    const [input, label] = this.getElements(getElementArr);

    input.id = title;
    label.setAttribute("for", title);
    label.textContent = title;

    return TMTitleWrapper;
  }
}