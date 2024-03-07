import Home from '../pages/Home.js';
import Blog from '../pages/Blog.js';
import Router from '../router/Router.js';

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
