import { ActionIcon, Paper, Tabs } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditCircle } from "tabler-icons-react";
import Info from "../../../../shared/components/Info/Info";
import { SectionEntityFragment } from "../../../../shared/graphql/Admin/types";
import { useReadFragment } from "../../../../shared/hooks/useReadFragment";
import { FoodItemTable } from "./EntityTables";
import { sectionFragment } from "./fragments";
import {
  EntityBasicInfoContainer,
  EntityDisplayContainer,
  EntityHeading,
  EntityHeadingContainer,
  EntityInfoContainer,
} from "./Styles";

function Section() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);
  const { sectionid } = useParams();
  const [data, checked, refetch] = useReadFragment<SectionEntityFragment>(
    parseInt(sectionid!),
    "Section",
    sectionFragment
  );
  return (
    <>
      {Object.keys(data).length !== 0 && (
        <>
          <EntityDisplayContainer>
            <EntityHeadingContainer>
              <EntityHeading>{data.title}</EntityHeading>
              <ActionIcon>
                <EditCircle
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/admin/edit", {
                      state: {
                        type: "section",
                        fragmentType: "Section",
                        id: data.menu.id,
                        fragmentid: data.id,
                      },
                    });
                  }}
                />
              </ActionIcon>
            </EntityHeadingContainer>
            <Tabs variant="pills" onTabChange={(idx) => setActiveTab(idx)}>
              <Tabs.Tab label="Information"></Tabs.Tab>
              <Tabs.Tab label="Food Items"></Tabs.Tab>
            </Tabs>
            <Paper shadow="md" withBorder style={{ marginTop: ".5em" }}>
              <EntityInfoContainer>
                {activeTab === 0 ? (
                  <EntityBasicInfoContainer>
                    <Info label="Code" details={data.code} />
                    <Info label="Menus" details={data.menu.title} />
                    <Info
                      label="No. of Items"
                      details={data.fooditems.length}
                    />
                  </EntityBasicInfoContainer>
                ) : (
                  <Paper withBorder shadow="md">
                    <FoodItemTable
                      foodItems={data.fooditems}
                      parent="section"
                      parentData={data}
                      refetch={refetch}
                    />
                  </Paper>
                )}
              </EntityInfoContainer>
            </Paper>
          </EntityDisplayContainer>
        </>
      )}
    </>
  );
}

export default Section;
