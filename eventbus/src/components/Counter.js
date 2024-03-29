import { Component } from './Component.js';

export class Counter extends Component {

  constructor() {
    super();
  }

  render({ state, temp }) {
    const root = this.getTemplate("count");

    const span = root.querySelector("span");

    span.textContent = state;

    temp.appendChild(root)
  }
}
