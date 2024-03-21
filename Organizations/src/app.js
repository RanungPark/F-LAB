import { Component } from './core/Component.js';
import { store } from './store.js';


const InputA = () => `<input id="stateA" value="${store.getState().a}" size="5" />`;
const InputB = () => `<input id="stateB" value="${store.getState().b}" size="5" />`;
const Calculator = () => `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

export class App extends Component {
  template() {
    return `
      ${InputA()}
      ${InputB()}
      ${Calculator()}
    `
  }

  setEvent() {
    const { element } = this;
    element.querySelector('#stateA').addEventListener('change', ({ target }) => {
      store.dispatch(setA(Number(target.value)));
    })

    element.querySelector('#stateB').addEventListener('change', ({ target }) => {
      store.dispatch(setA(Number(target.value)));
    })
  }
}