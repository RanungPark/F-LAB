export default function createRouter(routes) {
  const PATH_PARAMETER = /:([^/]+)/;

  const router = {
    start() {
      const checkRoutes = () => {
        const currentRoute = routes.find(route => route.path === window.location.hash);
        currentRoute.element();
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