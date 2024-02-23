export default function matchPathParameters(currentPath, routePath) {
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
