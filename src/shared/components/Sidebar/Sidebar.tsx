import { Accordion } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "tabler-icons-react";
import { IconButton } from "../Button/IconButton";
import { SidebarComponent as SidebarComponentType } from "./SidebarItems";
import {
  MobileNavbar,
  SidebarComponent,
  SidebarContainer,
  SidebarItemsContainer,
  SidebarX,
} from "./Styles";

function Sidebar({
  expanded,
  setExpanded,
  sidebarItems,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarItems: SidebarComponentType[];
}) {
  const navigate = useNavigate();
  return (
    <>
      <SidebarContainer expanded={expanded}>
        <SidebarItemsContainer>
          <SidebarX>
            <IconButton
              icon={<X />}
              style={{ alignSelf: "flex-end", marginRight: "1em" }}
              onClick={() => setExpanded(false)}
            />
          </SidebarX>
          {sidebarItems.map((component) => {
            return (
              <SidebarComponent
                key={component.name}
                onClick={() => {
                  navigate(component.url!);
                  setExpanded(false);
                }}
              >
                {component.icon}
                <span>{component.name}</span>
              </SidebarComponent>
            );
          })}
        </SidebarItemsContainer>
      </SidebarContainer>
      <MobileNavbar>
        <IconButton
          icon={<Menu />}
          style={{ alignSelf: "center", marginLeft: "1em" }}
          onClick={() => setExpanded(true)}
        />
      </MobileNavbar>
    </>
  );
}

export default Sidebar;
