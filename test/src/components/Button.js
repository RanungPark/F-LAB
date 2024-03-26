import { Component } from "./Component.js";

export class Button extends Component {
  constructor() {
    super();
  }

  render({ state, dispatch }) {
    const root = this.getTemplate("buttons");

    const increment = root.querySelector(".increment");

    increment.addEventListener("click", () => {
      dispatch(actions.increment(state.number++));
    });

    this.target.appendChild(root);
  }
}
