export class Component {
  root

  constructor() { }

  setRoot(id) {
    this.root = document.getElementById(id).content.firstElementChild.cloneNode(true);
    return this.root;
  }

  getElements(selectors) {
    const element = [];
    selectors.forEach(selector => element.push(this.root.querySelector(selector)))

    return element;
  }

  getElement(selector) {
    return this.root.querySelector(selector);
  }

  setElements(elementArrs) {
    const elements = []
    elementArrs.forEach(({ tag, id = null, className = null, content = null }) => {
      const element = document.createElement(tag);
      className ? element.className = className : element.id = id;
      if (content) element.textContent = content
      elements.push(element)
    })

    return elements;
  }

  setElement(tag, { className = null, id = null, content = null }) {
    const element = document.createElement(tag);
    className ? element.className = className : element.id = id;
    if (content) element.textContent = content
    return element;
  }

  appendChildElement(target, targetchild = null, ...elements) {
    if (targetchild) {
      elements.forEach(element => targetchild.appendChild(element));
      target.appendChild(targetchild);
    } else {
      elements.forEach(element => target.appendChild(element));
    }
  }

  setIconElement({ target = null, id = null, className }) {
    const imageWrapper = target ? target : this.setElement("div", { id });
    const imageElement = document.createElement("i");
    imageElement.className = className;

    this.appendChildElement(imageWrapper, imageElement);
    return imageWrapper;
  }
}