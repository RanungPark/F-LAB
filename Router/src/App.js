import Router from './router/Router.js';
import TechPage from './pages/TechPage.js';
import DesignPage from './pages/DesignPage.js';
import ArticlePage from './pages/ArticlePage.js';
// import { worker } from './mocks/server.js';

// if (process.env.NODE_ENV === "development") {
//   worker.start();
// }

const targetElement = document.querySelector(".App");

const router = Router();

document.addEventListener('click', router.navigate);

router.addRouter({
  path: '/',
  element: () => TechPage({ targetElement })(),
}).addRouter({
  path: '/tech',
  element: () => TechPage({ targetElement })(),
}).addRouter({
  path: '/design',
  element: () => DesignPage({ targetElement })(),
}).addRouter({
  path: '/tech/article/:id',
  element: ({ id }) => ArticlePage({ targetElement, id })(),
}).addRouter({
  path: '/design/article/:id',
  element: ({ id }) => ArticlePage({ targetElement, id })(),
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
