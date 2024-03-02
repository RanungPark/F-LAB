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
    const currentPath = window.location.pathname;
    const currentRoutes = routes.find(route => {
      const routePath = route.path.replace(PATH_PARAMETER, '([^/]+)');
      const regex = new RegExp(`^${routePath}$`);
      return regex.test(currentPath);
    });

    if (currentRoutes) {
      const params = Router.matchPathParameters(currentPath, currentRoutes.path);
      currentRoutes.element(params);
    }
  }

  start() {
    window.addEventListener('popstate', () => Router.checkRoutes(this.routes));
    Router.checkRoutes(this.routes);
  }

  navigate(path) {
    history.pushState(null, '', path);
    Router.checkRoutes(this.routes);
  }
}

export default Router;