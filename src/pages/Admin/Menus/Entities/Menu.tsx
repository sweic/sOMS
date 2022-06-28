import { ActionIcon, Menu, Paper, Tabs } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditCircle, Plus } from "tabler-icons-react";
import Info from "../../../../shared/components/Info/Info";
import { MenuEntityFragment } from "../../../../shared/graphql/Admin/types";
import { useReadFragment } from "../../../../shared/hooks/useReadFragment";
import MenuOverview from "../Overview/MenuOverview";
import { FoodItemTable, SectionTable } from "./EntityTables";
import { menuFragment } from "./fragments";
import {
  EntityBasicInfoContainer,
  EntityDisplayContainer,
  EntityHeading,
  EntityHeadingContainer,
  EntityInfoContainer,
} from "./Styles";
function EntityMenu() {
  const navigate = useNavigate();
  const { menuid } = useParams();
  const [data, checked, refetch] = useReadFragment<MenuEntityFragment>(
    parseInt(menuid!),
    "Menu",
    menuFragment
  );
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {Object.keys(data).length !== 0 && (
        <>
          <EntityDisplayContainer>
            <EntityHeadingContainer>
              <EntityHeading>{data.title}</EntityHeading>
              <EditCircle
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/admin/edit", {
                    state: {
                      type: "menu",
                      fragmentType: "Menu",
                      id: data.id,
                      fragmentid: data.id,
                    },
                  });
                }}
              />
              <Menu
                control={
                  <ActionIcon>
                    <Plus />
                  </ActionIcon>
                }
              >
                <Menu.Item
                  onClick={() => {
                    navigate("/admin/create/section", {
                      state: {
                        menuid: data.id,
                      },
                    });
                  }}
                >
                  Add Section
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    navigate("/admin/create/item", {
                      state: {
                        menuid: data.id,
                      },
                    });
                  }}
                >
                  Add Food Item
                </Menu.Item>
              </Menu>
            </EntityHeadingContainer>
            <Tabs variant="pills" onTabChange={(idx) => setActiveTab(idx)}>
              <Tabs.Tab label="Information" />
              <Tabs.Tab label="Overview" />
              <Tabs.Tab label="Section" />
              <Tabs.Tab label="Item" />
            </Tabs>
            <EntityInfoContainer>
              <Paper shadow="md" withBorder>
                {activeTab === 0 ? (
                  <EntityBasicInfoContainer>
                    <Info label="Last Updated At" details={data.updatedat} />
                  </EntityBasicInfoContainer>
                ) : activeTab === 1 ? (
                  <MenuOverview menuid={data.id} />
                ) : activeTab === 2 ? (
                  <Paper
                    withBorder
                    shadow="md"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <SectionTable
                      sections={data.sections}
                      parent="menu"
                      parentData={data}
                      refetch={refetch}
                    />
                  </Paper>
                ) : activeTab === 3 ? (
                  <Paper
                    withBorder
                    shadow="md"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <FoodItemTable
                      foodItems={data.fooditems}
                      parent="menu"
                      parentData={data}
                      refetch={refetch}
                    />
                  </Paper>
                ) : null}
              </Paper>
            </EntityInfoContainer>
          </EntityDisplayContainer>
        </>
      )}
    </>
  );
}

export default EntityMenu;

//Menu -> Section + Items
//Sections -> FoodItems
//FoodItems -> Section
