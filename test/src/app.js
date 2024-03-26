import { Button } from "./components/Button.js";
import { Counter } from "./components/Counter.js";
import { event } from "src/libs/eventbus.js";

export const actions = {
  increment: (number) => {
    return {
      type: "INCREMENT",
      payload: { number },
    };
  },
  decrement: (number) => {
    return {
      type: "DECREMENT",
      payload: { number },
    };
  },
};

/**
 * model
 */
const initialState = {
  number: 0,
};

const handlers = {
  INCREMENT: (prev, event) => {
    const { number } = event.payload;

    return {
      ...prev,
      number
    }
  },
  DECREMENT: () => {},
};

function main() {
  const { number } = event.getState();
  

  const counter = new Counter();
  const buttons = new Button();

  counter.render(
    state: number,
    dispatch: event.dispatch
    
  );
  buttons.render({
    state: number,
    dispatch: event.dispatch
  });
}

event.subscribe(main);

main();
