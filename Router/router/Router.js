export default function Router(routes) {
  // const routes = [];
  const TICK = 50000;
  const PATH_PARAMETER = /:([^/]+)/g;
  const CHANGE_PARAMETER = '([^/]+)';

  function matchPathParameters(currentPath, routePath) {
    const params = {};
    const currentPathSections = currentPath.split('/');
    const routePathSections = routePath.split('/');
    routePathSections.forEach((routePathSection, i) => {
      if (routePathSection.startsWith(':')) {
        const paramName = routePathSection.substring(1);
        params[paramName] = currentPathSections[i];
      }
    })
    return params;
  }

  const checkRoutes = () => {
    const { pathname } = location;
    const currentRoute = routes.find(route => {
      const routePath = route.path.replace(PATH_PARAMETER, CHANGE_PARAMETER);
      const regex = new RegExp(`^${routePath}$`);
      return regex.test(pathname);
    });
    if (currentRoute) {
      if (currentRoute.path === pathname) {
        currentRoute.element();
      } else {
        const params = matchPathParameters(pathname, currentRoute.path);
        currentRoute.element(params);
      }
    }
  }

  const router = {
    start() {
      window.addEventListener('popstate', () => checkRoutes());
      checkRoutes();
      window.setInterval(() => {
        checkRoutes();
      }, TICK)
    },

    changePath(path) {
      history.pushState({}, '', path);
      checkRoutes();
    },

    navigate(e) {
      const { target } = e
      e.preventDefault();
      if (target.matches("[data-navigate]")) {
        router.changePath(e.target.getAttribute("data-navigate"));
      } else if (target.matches('a')) {
        router.changePath(e.target.href);
      }
    },

    // addRouter(route) {

    // },
  };

  return router;
}