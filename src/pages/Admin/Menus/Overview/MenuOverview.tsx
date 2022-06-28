import { Avatar, Divider, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Meat } from "tabler-icons-react";
import Loading from "../../../../shared/components/Loading/Loading";
import { MenuEntityFragment } from "../../../../shared/graphql/Admin/types";
import { useReadFragment } from "../../../../shared/hooks/useReadFragment";
import { menuFragment } from "../Entities/fragments";
import {
  FoodItemContent,
  MenuOverviewContainer,
  MenuOverviewSectionBlock,
  MenuOverviewSections,
  SectionBlockHeading,
  SectionContent,
} from "./Styles";

function MenuOverview({ menuid }: { menuid: number }) {
  const [menu, checked, refetch] = useReadFragment<MenuEntityFragment>(
    menuid,
    "Menu",
    menuFragment
  );
  const navigate = useNavigate();
  return (
    <>
      {checked ? (
        <MenuOverviewContainer>
          <MenuOverviewSections>
            {menu.sections.map((section) => {
              return (
                <>
                  <MenuOverviewSectionBlock key={section.id}>
                    <SectionBlockHeading
                      onClick={() => navigate(`/admin/sections/${section.id}`)}
                    >
                      <Group noWrap>
                        <Avatar
                          radius="xl"
                          size="xl"
                          src={section.image?.imageURL}
                        >
                          <Meat />
                        </Avatar>
                        <Text size="lg">{section.title}</Text>
                      </Group>
                      <Text>No. of Items: {section.fooditems.length}</Text>
                    </SectionBlockHeading>

                    <SectionContent>
                      {section.fooditems.map((item) => {
                        return (
                          <FoodItemContent
                            onClick={() =>
                              navigate(`/admin/fooditems/${item.id}`)
                            }
                            key={item.id}
                          >
                            <Group noWrap>
                              <Avatar
                                radius="md"
                                size="md"
                                src={item.image?.imageURL}
                              >
                                <Meat />
                              </Avatar>
                              <Text>{item.title}</Text>
                              <Text>${parseFloat(item.price).toFixed(2)}</Text>
                            </Group>
                          </FoodItemContent>
                        );
                      })}
                    </SectionContent>
                  </MenuOverviewSectionBlock>
                </>
              );
            })}
          </MenuOverviewSections>
        </MenuOverviewContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MenuOverview;
