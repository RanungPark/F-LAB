import { handlers } from "./handlers.js";

let initialState = {
  teamsList: {},
  team: '',
  cards: [],
};

const listeners = []

export const event = {
  getState() {
    return initialState;
  },

  subscribe(listener) {
    if (typeof listener === "function") {
      listeners.push(listener);
    }
  },

  dispatch(action) {
    if (typeof action === "object" && action.type) {
      const handler = handlers[action.type];
      if (handler) {
        initialState = { ...handler(initialState, action) };
        listeners.forEach(listener => listener());
      }
    }
  },
};