import { Button } from "./components/Button.js";
import { Counter } from "./components/Counter.js";
import { event } from './libs/eventbus/eventbus.js';

export function main() {
  const { number } = event.getState();

  const counter = new Counter();
  const buttons = new Button();

  counter.render({
    state: number,
    dispatch: event.dispatch,
  });
  buttons.render({
    state: number,
    dispatch: event.dispatch,
  });
}

event.subscribe(main);

main();
