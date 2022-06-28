import { ActionIcon, Avatar, Paper, Tabs } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditCircle } from "tabler-icons-react";
import Info from "../../../../shared/components/Info/Info";
import { FoodItemEntityFragment } from "../../../../shared/graphql/Admin/types";
import { useReadFragment } from "../../../../shared/hooks/useReadFragment";
import { TableLink } from "../Styles";
import { SectionTable } from "./EntityTables";
import { foodItemFragment } from "./fragments";
import {
  EntityBasicInfoContainer,
  EntityDisplayContainer,
  EntityHeading,
  EntityHeadingContainer,
  EntityInfoContainer,
} from "./Styles";

function FoodItem() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);
  const { fooditemid } = useParams();
  const [data, checked, refetch] = useReadFragment<FoodItemEntityFragment>(
    parseInt(fooditemid!),
    "FoodItem",
    foodItemFragment
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
                        type: "item",
                        fragmentType: "FoodItem",
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
              <Tabs.Tab label="Sections"></Tabs.Tab>
            </Tabs>
            <Paper shadow="md" withBorder style={{ marginTop: ".5em" }}>
              <EntityInfoContainer>
                {activeTab === 0 ? (
                  <EntityBasicInfoContainer>
                    <Info label="Code" details={data.code} />
                    <Info
                      label="Sections"
                      details={
                        <>
                          {data.sections.map((section, idx) => {
                            return (
                              <span
                                key={section.id}
                                onClick={() =>
                                  navigate(`/admin/sections/${section.id}`)
                                }
                              >
                                {idx ? ", " : ""}
                                <TableLink>{section.title}</TableLink>
                              </span>
                            );
                          })}
                        </>
                      }
                    />
                    <Info
                      label="Image"
                      details={
                        <>
                          <div>
                            {data.image && data.image.imageURL ? (
                              <Avatar size={50} src={data.image!.imageURL} />
                            ) : (
                              <span>Not found</span>
                            )}
                          </div>
                        </>
                      }
                    />
                  </EntityBasicInfoContainer>
                ) : (
                  <Paper withBorder shadow="md">
                    <SectionTable
                      sections={data.sections}
                      parent="item"
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

export default FoodItem;
