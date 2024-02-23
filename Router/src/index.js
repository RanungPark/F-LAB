import createRouter from "./router.js";

const container = document.querySelector("main")

const router = createRouter([
  {
    path: '#/',
    element: () => container.innerText = "home page",
  },
  {
    path: '#/blog',
    element: () => container.innerText = "blog page",
  },
  {
    path: '#/blog/:name/:page',
    element: (params) => container.innerText = `${params.name} ${params.page}page`,
  },
]);

window.addEventListener('click', e => {
  if (e.target.getAttribute("data-navigate")) {
    router.navigate(e.target.getAttribute("data-navigate"))
  }
})

router.start();