export class Component {
  constructor() {
    this.target = document.getElementById('app');
  }

  getTemplate(id) {
    return document.getElementById(id).content.firstElementChild.cloneNode(true);
  }
}
