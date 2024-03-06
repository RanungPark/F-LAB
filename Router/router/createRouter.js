import Home from '../pages/Home.js';
import Blog from '../pages/Blog.js'
import Router from './Router.js';

/**
 * 보기가 힘들다.
 * 1. path 추가
 * 2. 
 */

function createRouter({ $target }) {
  const router = Router([
    {
      path: '/',
      element: () => new Home({ $target }).render(),
    },
    {
      path: '/blog',
      element: () => new Blog({ $target }).render(),
    },
    {
      path: '/blog/:name/:page',
      element: ({ name, page }) => new Blog({ $target, name, page }).render(),
    },
  ]);

  return router;
}

export default createRouter


/**
 * as is
 */