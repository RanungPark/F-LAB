import createRouter from '../router/createRouter.js';

const container = document.querySelector(".App");

const routerInstance = createRouter({ $target: container })

document.addEventListener('click', e => {
  const { target } = e
  if (target.matches("[data-navigate]")) {
    e.preventDefault();
    routerInstance.navigate(e.target.getAttribute("data-navigate"));
  } else if (target.matches('a')) {
    e.preventDefault();
    routerInstance.navigate(e.target.href);
  }
});

routerInstance.start();