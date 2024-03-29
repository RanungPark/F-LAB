import { createStore } from './core/store.js';

const initState = {
  items: ['item1', 'item2']
}

export const SET_A = 'SET_A';
export const SET_B = 'SET_B';

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, a: action.payload }
    case 'SET_B':
      return { ...state, b: action.payload }
    default:
      return state;
  }
})

export const setA = (payload) => ({ type: SET_A, payload });
export const setB = (payload) => ({ type: SET_B, payload });