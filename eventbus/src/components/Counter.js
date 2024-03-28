import { Component } from './Component.js';

export class Counter extends Component {

  constructor() {
    super();
  }

  render({ state }) {

    const root = this.getTemplate("count");

    const span = root.querySelector("span");

    span.textContent = state;

    this.target.appendChild(root);
  }
}
