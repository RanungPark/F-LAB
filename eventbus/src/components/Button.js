import { actions } from '../libs/eventbus/actions.js';
import { Component } from "./Component.js";

export class Button extends Component {
  constructor() {
    super();
  }

  render({ state, dispatch }) {
    const root = this.getTemplate("buttons");

    const increment = root.querySelector(".increment");
    const decrement = root.querySelector(".decrement");

    increment.addEventListener("click", () => {
      dispatch(actions.increment(state++));
    });
    decrement.addEventListener("click", () => {
      dispatch(actions.decrement(state--));
    });

    this.target.appendChild(root)
  }
}
