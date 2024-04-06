export class Component {
  root

  constructor() { }

  setRoot(id) {
    this.root = document.getElementById(id).content.firstElementChild.cloneNode(true);
    return this.root;
  }

  getElements(selectors) {
    const element = [];
    selectors.forEach(selector => element.push(this.root.querySelector(selector)));

    return element;
  }

  getElement(selector) {
    return this.root.querySelector(selector);
  }

  setElements(elementArrs) {
    const elements = [];
    elementArrs.forEach(({ tag, id = null, className = null, content = null }) => {
      const element = document.createElement(tag);
      className ? element.className = className : element.id = id;
      if (content) element.textContent = content;
      elements.push(element);
    })

    return elements;
  }

  setElement(tag, { className = null, id = null, content = null }) {
    const element = document.createElement(tag);
    className ? element.className = className : element.id = id;
    if (content) element.textContent = content;
    return element;
  }

  appendElements(target, ...elements) {
    elements.forEach(element => target.appendChild(element));
  }

  appendChildsElement({ target, childs }) {
    childs.forEach(child => this.appendElements(target, child));
  }

  setIconElement({ target = null, id = null, className }) {
    const imageWrapper = target ? target : this.setElement("div", { id });
    const imageElement = document.createElement("i");
    imageElement.className = className;

    this.appendElements(imageWrapper, imageElement);
    return imageWrapper;
  }
}