import { Link } from "react-router-dom";

const sidebarItemsGenerator = (items, role) => {
  const sidebarItems = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item?.icon,
        label: (
          <Link style={{ textDecoration: "none" }} to={`/${role}/${item.path}`}>
            <p
              style={{
                margin: "auto 0",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              {item.name}
            </p>
          </Link>
        ),
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
            label: <Link to={`/${role}/${child?.path}`}>{child?.name}</Link>,
          };
        }),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
export default sidebarItemsGenerator;
