export class Component {
  root

  constructor() { }

  setRoot(id) {
    this.root = document.getElementById(id).content.firstElementChild.cloneNode(true);
    return this.root
  }

  getElement(className) {
    return this.root.querySelector(`.${className}`);
  }
}