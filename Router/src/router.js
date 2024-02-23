import matchPathParameters from './matchPathParameters.js';

export default function createRouter(routes) {
  const router = {
    start() {
      const checkRoutes = () => {
        const currentHash = window.location.hash;
        const currentRoutes = routes.find(route => {
          const routePath = route.path.replace(/:([^/]+)/g, '([^/]+)');
          const regex = new RegExp(`^${routePath}$`);
          return regex.test(currentHash);
        });
        if (currentRoutes) {
          const params = matchPathParameters(currentHash, currentRoutes.path);
          currentRoutes.element(params);
        }
      }

      window.addEventListener('hashchange', checkRoutes);
      checkRoutes();
    },

    navigate(path) {
      window.location.hash = path;
    },
  };

  return router;
}