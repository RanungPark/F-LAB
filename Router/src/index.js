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
    element: ({name, page}) => container.innerText = `${name} ${page}page`,
  },
]);

document.addEventListener('click', e => {
  const { target } = e
  if (target.matches("[data-navigate]")) {
    e.preventDefault();
    router.navigate(e.target.getAttribute("data-navigate"));
  } else if (target.matches('a')) {
    e.preventDefault();
    router.navigate(e.target.href);
  }
});

router.start();