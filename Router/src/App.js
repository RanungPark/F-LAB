import createRouter from '../router/createRouter.js';

const container = document.querySelector(".App");

const routerInstance = createRouter({ $target: container })

document.addEventListener('click', routerInstance.navigate.bind(routerInstance));

routerInstance.start();