import { Button } from "./components/Button.js";
import { Counter } from "./components/Counter.js";
import { event } from './libs/eventbus/eventbus.js';

export function main() {
  const { number } = event.getState();

  const counter = new Counter();
  const buttons = new Button();

  const temp = document.createElement('div')

  counter.render({
    state: number,
    dispatch: event.dispatch,
    temp: temp
  });
  
  buttons.render({
    state: number,
    dispatch: event.dispatch,
    temp: temp
  });

  const app = document.getElementById('app')

  if (app.firstChild) {
    app.removeChild(app.firstChild)
  }
  app.appendChild(temp)
}

event.subscribe(main);

main();
