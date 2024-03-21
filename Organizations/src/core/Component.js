import { observable, observe } from './observer.js';

export class Component {
  state;
  props;
  element;

  constructor(element, props) {
    this.element = element;
    this.props = props;
    this.setup();
  }

  setup() {
    this.state = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    })
  }

  initState() { return {} }
  template() { return ''; }
  render() { this.element.innerHTML = this.template(); }
  setEvent() { }
  mounted() { }
}