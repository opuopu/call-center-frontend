import { NavLink } from "react-router-dom";

const sidebarItemsGenerator = (items, role) => {
  const sidebarItems = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        key: item?.name,
        icon: item?.icon,
        label: <NavLink to={`/${role}/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item?.name,
        label: item?.name,
        icon: item?.icon,
        children: item?.children?.map((child) => {
          return {
            key: child?.name,
            icon: child?.icon,
            label: (
              <NavLink to={`/${role}/${child?.path}`}>{child?.name}</NavLink>
            ),
          };
        }),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
export default sidebarItemsGenerator;
