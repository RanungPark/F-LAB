export const handlers = {
  INCREMENT: (prev, event) => {
    const { number } = event.payload;
    return {
      ...prev,
      number
    }
  },
  DECREMENT: (prev, event) => {
    const { number } = event.payload;
    return {
      ...prev,
      number
    }
  },
};
