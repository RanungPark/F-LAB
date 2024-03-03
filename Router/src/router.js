class Router {
  constructor(routes) {
    this.routes = routes;
  }

  static matchPathParameters(currentPath, routePath) {
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

  static checkRoutes(routes) {
    const PATH_PARAMETER = /:([^/]+)/g;
    const CHANGE_PARAMETER = '([^/]+)';
    const { pathname } = location;
    const currentRoutes = routes.find(route => {
      const routePath = route.path.replace(PATH_PARAMETER, CHANGE_PARAMETER);
      const regex = new RegExp(`^${routePath}$`);
      return regex.test(pathname);
    });
    if (currentRoutes === pathname) {
      currentRoutes.element();
    } else {
      const params = Router.matchPathParameters(pathname, currentRoutes.path);
      currentRoutes.element(params);
    }
  }

  start() {
    window.addEventListener('popstate', () => Router.checkRoutes(this.routes));
    Router.checkRoutes(this.routes);
  }

  navigate(path) {
    history.pushState({}, '', path);
    Router.checkRoutes(this.routes);
  }
}

export default Router;