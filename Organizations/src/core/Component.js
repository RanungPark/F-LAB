// import { observable, observe } from './observer.js';
// import { updateElement } from './updateElement.js';

// export class Component {
//   target;
//   state;
//   props;
//   element;

//   constructor(target, element, props) {
//     this.target = target;
//     this.element = element;
//     this.props = props;
//     this.setup();
//     this.render();
//   }

//   setup() {
//     // this.state = observable(this.initState());
//     // observe(() => {
//     //   this.render();
//     //   this.setEvent();
//     //   this.mounted();
//     // })
//   }

//   initState() { return {} }

//   template() { return ''; }

//   render() {
//     const { target } = this;

//     const newNode = target.cloneNode(true);
//     newNode.innerHTML = this.template();

//     const newChildren = [...newNode.childNodes];
//     const oldChildren = [...oldNode.childNodes];
//     const maxLength = Math.max(newChildren.length, oldChildren.length);
//     for (let i = 0; i < maxLength; i++) {
//       updateElement(oldNode, newChildren[i], oldChildren[i]);
//     }

//     this.setEvent();
//   }

//   setEvent() { }

//   mounted() { }

//   setState(newState) {
//     this.state = { ...this.state, ...newState };
//     this.render();
//   }
// }

import { createElement, h } from './createElement.js';
import { updateElement } from "./updateElement.js";

export class Component {
  $target; $state;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() { };

  template() { return createElement(h('div', null, null)) }

  // 여기가 핵심이다.
  render() {
    const { $target } = this;
    // console.log($target)

    // 기존 Node를 복제한 후에 새로운 템플릿을 채워넣는다.
    const newNode = $target.cloneNode(true);
    newNode.innerHTML = this.template().outerHTML;
    // console.log(newNode)

    // DIFF알고리즘을 적용한다.
    const oldChildNodes = [...$target.childNodes];
    const newChildNodes = [...newNode.childNodes];
    const max = Math.max(oldChildNodes.length, newChildNodes.length);
    for (let i = 0; i < max; i++) {
      updateElement($target, newChildNodes[i], oldChildNodes[i]);
    }

    // 이벤트를 등록한다.
    requestAnimationFrame(() => this.setEvent());
  }

  setEvent() { }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}