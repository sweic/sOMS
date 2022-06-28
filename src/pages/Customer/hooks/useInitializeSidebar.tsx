import { useEffect, useState } from "react";
import { SidebarComponent } from "../../../shared/components/Sidebar/SidebarItems";
import { CustomerSectionsCacheQuery } from "../../../shared/graphql/Customer/types";
import { Book, ShoppingCart, Stack2 } from "tabler-icons-react";
import { Avatar } from "@mantine/core";

export const useInitializeSidebar = (data: CustomerSectionsCacheQuery) => {
  const [sidebarItems, setSidebarItems] = useState<SidebarComponent[]>([]);
  useEffect(() => {
    if (!data || !data.sections || sidebarItems.length > 0) return;
    var tmpSidebarItems = initialComponents;
    for (const section of data.sections) {
      tmpSidebarItems.push({
        name: section.title,
        url: `/order/section/${section.id}`,
        icon: section.image ? <Avatar src={section.image.imageURL} /> : null,
      });
    }
    setSidebarItems(tmpSidebarItems);
  }, [data]);

  return sidebarItems;
};

const initialComponents: SidebarComponent[] = [
  {
    name: "Cart",
    url: "/order/cart",
    icon: <ShoppingCart />,
  },
  {
    name: "Orders",
    url: "/order/all",
    icon: <Stack2 />,
  },
  {
    name: "Menu",
    url: "/order/sections",
    icon: <Book />,
  },
];
