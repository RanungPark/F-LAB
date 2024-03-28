import { handlers } from '../../app.js';


let initialState = {
  number: 0,
};

const listeners = []

export const event = {
  getState() {
    return initialState;
  },

  subscribe(listener) {
    if (typeof listener === 'function') {
      listeners.push(listener)
    }
  },

  dispatch(action) {
    if (typeof action === 'object' && action.type) {
      const handler = handlers[action.type];
      if (handler) {
        initialState = { ...handler(initialState, action) };
        console.log(initialState)
        listeners.forEach(listener => listener())
      }
    }
  }
}