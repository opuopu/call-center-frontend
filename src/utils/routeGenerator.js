export const routeGenerator = (items) => {
  const routes = items.reduce((acc, cur) => {
    if (cur.path && cur.element) {
      acc.push({
        path: cur.path,
        element: cur.element,
      });
    }

    if (cur.children) {
      cur.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
export default routeGenerator;
