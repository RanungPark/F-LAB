import Router from "./router.js";

const container = document.querySelector("main");

const router = new Router([
  {
    path: '/',
    element: () => container.innerText = "home page",
  },
  {
    path: '/blog',
    element: () => container.innerText = "blog page",
  },
  {
    path: '/blog/:name/:page',
    element: (params) => container.innerText = `${params.name} ${params.page}page`,
  },
]);

document.addEventListener('click', e => {
  if (e.target.getAttribute("data-navigate")) {
    e.preventDefault();
    router.navigate(e.target.getAttribute("data-navigate"));
  }
});

router.start();