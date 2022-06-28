import { ReactNode } from "react";
import { CurrencyDollar, Grill, Notebook, Plus } from "tabler-icons-react";

type NavigateURL = `/${string}`;

export interface SidebarComponent {
  name: string;
  url?: NavigateURL;
  icon?: ReactNode;
}

export const AdminSidebarItems: SidebarComponent[] = [
  {
    name: "Service",
    url: "/admin/service",
    icon: <Grill />,
  },
  {
    name: "Menus",
    url: "/admin/overview",
    icon: <Notebook />,
  },
];
