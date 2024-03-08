import Router from './router/Router.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import { worker } from './mocks/server.js';

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const targetElement = document.querySelector(".App");

const router = Router();

document.addEventListener('click', router.navigate);

router.addRouter({
  path: '/',
  element: () => Home({ targetElement })(),
}).addRouter({
  path: '/blog',
  element: () => Blog({ targetElement })(),
}).addRouter({
  path: '/blog/:name/:page',
  element: ({ name, page }) => Blog({ targetElement, name, page })(),
}).start();

const a = fetch("/tech")
  .then((response) => response.json())
  .then((data) => console.log(data));

/**
 * 100 lines
 */

/**
 * 1. 체이닝
 * ```
 * routerInstance.add({path:"/", element:""}).add({path:"/", element:""}).add({path:"/", element:""}).start()
 * ```
 */


/**
 * 2. callback
 */
