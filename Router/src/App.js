import createRouter from '../router/createRouter.js';

const container = document.querySelector(".App");

const routerInstance = createRouter({ targetElement: container })

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

document.addEventListener('click', routerInstance.navigate);

/**
 * 100 lines
 */

routerInstance.start();