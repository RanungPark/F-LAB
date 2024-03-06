import Home from '../pages/Home.js';
import Blog from '../pages/Blog.js'
import Router from './Router.js';

function createRouter({ targetElement }) {
  const router = Router([
    {
      path: '/',
      element: () => new Home({ targetElement }).render(),
    },
    {
      path: '/blog',
      element: () => new Blog({ targetElement }).render(),
    },
    {
      path: '/blog/:name/:page',
      element: ({ name, page }) => new Blog({ targetElement, name, page }).render(),
    },
  ]);

  return router;
}

export default createRouter
