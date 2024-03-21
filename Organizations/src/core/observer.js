let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn();
  currentObserver = null;
}

export const observable = obj => {
  Object.keys(obj).forEach(key => {
    let objValue = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return objValue;
      },

      set(value) {
        objValue = value;
        observers.forEach(fn => fn());
      }
    })
  })
  return obj;
}