import { LayoutDashboard, Store } from "lucide-react";

export const NAV_GROUPS = [
  {
    label: null,
    items: [
      { key: "dashboard", label: "Dashboard", icon: LayoutDashboard, url: "/" },
    ],
  },
  {
    label: "Management",
    items: [
      { key: "merchants", label: "Merchants", icon: Store, url: "/merchants", matchPrefix: "/merchants" },
    ],
  },
];

export const NAV_FOOTER = [];

export const NAV_ALL = [...NAV_GROUPS.flatMap((g) => g.items), ...NAV_FOOTER];

export function isItemActive(item, pathname) {
  if (!item.url) return false;
  if (item.matchPrefix) {
    return (
      pathname === item.matchPrefix ||
      pathname.startsWith(item.matchPrefix + "/")
    );
  }
  if (item.url === "/") return pathname === "/";
  return pathname === item.url || pathname.startsWith(item.url + "/");
}
