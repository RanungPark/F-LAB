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