// // import { Component } from './core/Component.js';
// // import { store } from './store.js';

// import { Component } from './core/Component.js';
// import { createElement, h } from './core/createElement.js';


// // // const InputA = () => `<input id="stateA" value="${store.getState().a}" size="5" />`;
// // // const InputB = () => `<input id="stateB" value="${store.getState().b}" size="5" />`;
// // // const Calculator = () => `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

// // export class App extends Component {
// //   template() {
// //     return `
// //       ${InputA()}
// //       ${InputB()}
// //       ${Calculator()}
// //     `
// //   }

// //   setEvent() {
// //     const { element } = this;
// //     element.querySelector('#stateA').addEventListener('change', ({ target }) => {
// //       store.dispatch(setA(Number(target.value)));
// //     })

// //     element.querySelector('#stateB').addEventListener('change', ({ target }) => {
// //       store.dispatch(setA(Number(target.value)));
// //     })
// //   }
// // }



// export class App extends Component {
//   setup() {
//     this.$state = { items: ['item1', 'item2'] };
//   }

//   template() {
//     const { items } = this.$state;
//     return createElement(
//       h('ul', null,
//         items.map(item =>
//           h('li', null, item)
//         )
//       ),
//       h('button', null, '추가')
//     )
//     // return `
//     //   <ul>
//     //     ${items.map(item => `<li>${item}</li>`).join('')}
//     //   </ul>
//     //   <button>추가</button>
//     // `;
//   }

//   setEvent() {
//     this.$target.querySelector('button').addEventListener('click', () => {
//       const { items } = this.$state;
//       this.setState({ items: [...items, `item${items.length + 1}`] });
//     });
//   }
// }


import { Component } from "./core/Component.js";
import { createElement, h } from './core/createElement.js';

export class App extends Component {
  setup() {
    this.$state = { items: ['item1', 'item2'] };
  }

  template() {
    const { items } = this.$state;
    return createElement(
      h('div', null,
        h('ul', null,
          items.map(item =>
            h('li', null, item)
          )
        ),
        h('button', null, '추가'))
    )
  }

  addItem = () => {
    const { items } = this.$state;
    this.setState({ items: [...items, `item${items.length + 1}`] });
  }

  setEvent() {
    // requestAnimationFrame 제거
    const $addButton = this.$target.querySelector('button');
    $addButton.removeEventListener('click', this.addItem);
    $addButton.addEventListener('click', this.addItem);
  }
}