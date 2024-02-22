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
    element: (params) => container.innerText = `${params.name} ${params.song}page`,
  },
]);

window.addEventListener('click', e => {
  console.log()
  if (e.target.getAttribute("data-navigate")) {
    router.navigate(e.target.getAttribute("data-navigate"))
  }
})

router.start();