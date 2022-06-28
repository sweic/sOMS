import { gql } from "@apollo/client";
import { Avatar, Card, Center, Popover, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Plus } from "tabler-icons-react";
import { CustomerOrderSection } from "../../../shared/graphql/Customer/types";
import { useReadFragment } from "../../../shared/hooks/useReadFragment";
import AddToCart from "./AddToCart";
import {
  MenuContainer,
  SectionBox,
  SectionsContainer,
  SectionText,
} from "./Styles";

function Section() {
  const { sectionid } = useParams();
  const [open, setOpened] = useState<number>(0);
  const [data, checked, refetch] = useReadFragment<CustomerOrderSection>(
    sectionid!,
    "Section",
    customerSectionFragment
  );

  useEffect(() => {
    if (!sectionid) return;
    refetch();
  }, [sectionid]);

  const [currentFoodID, setCurrentFoodID] = useState<number>(0);
  return (
    <>
      {checked && data && (
        <>
          <MenuContainer>
            <Center>
              <h1>{data.title}</h1>
            </Center>
            <SectionsContainer>
              {data.fooditems.map((fooditem) => {
                return (
                  <SectionBox key={fooditem.id} style={{ cursor: "default" }}>
                    <Card
                      shadow="sm"
                      withBorder
                      style={{ width: "100%", height: "100%", padding: "0" }}
                    >
                      <Stack
                        justify="flex-start"
                        align="center"
                        style={{ height: "100%" }}
                      >
                        <Card.Section>
                          {fooditem.image && (
                            <Avatar
                              src={fooditem.image.imageURL}
                              size={160}
                              radius="xs"
                            />
                          )}
                        </Card.Section>
                        <SectionText>
                          <span>{fooditem.title}</span>
                          <span>${parseFloat(fooditem.price).toFixed(2)}</span>
                          <Popover
                            onClose={() => {
                              setOpened(0);
                              setCurrentFoodID(0);
                            }}
                            target={
                              <Plus
                                cursor="pointer"
                                onClick={() => {
                                  setOpened((open) =>
                                    open === fooditem.id ? 0 : fooditem.id
                                  );
                                  setCurrentFoodID(open ? 0 : fooditem.id);
                                }}
                              />
                            }
                            opened={open === fooditem.id}
                            position="bottom"
                            placement="center"
                            spacing={8}
                            width={240}
                          >
                            <AddToCart
                              fooditemid={currentFoodID}
                              onClose={() => {
                                setOpened(0);
                                setCurrentFoodID(0);
                              }}
                            />
                          </Popover>
                        </SectionText>
                      </Stack>
                    </Card>
                  </SectionBox>
                );
              })}
            </SectionsContainer>
          </MenuContainer>
        </>
      )}
    </>
  );
}

export default Section;

const customerSectionFragment = (id: string | number) => gql`
    fragment Section${id} on Section {
        id
        code
        title
        image {
            id
            imageURL
        }
        fooditems {
            id
            code
            title
            price
            available
            image {
                id
                imageURL
            }
        }
    }
`;
