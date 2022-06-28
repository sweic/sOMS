import {
  Avatar,
  Card,
  Group,
  Paper,
  Image,
  Stack,
  Center,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { customerSectionsCache } from "../../../shared/graphql/Customer/gql";
import { CustomerSectionsCacheQuery } from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";
import {
  MenuContainer,
  SectionBox,
  SectionsContainer,
  SectionText,
} from "./Styles";

function Sections() {
  const sections: CustomerSectionsCacheQuery | null = Client.readQuery({
    query: customerSectionsCache,
  });
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <Center>
        <h1>Menu</h1>
      </Center>
      <SectionsContainer>
        {sections && (
          <>
            {sections.sections.map((section) => {
              return (
                <SectionBox
                  key={section.id}
                  onClick={() => navigate(`/order/section/${section.id}`)}
                >
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
                        {section.image && (
                          <Avatar
                            src={section.image.imageURL}
                            size={160}
                            radius="xs"
                          />
                        )}
                      </Card.Section>
                      <SectionText>
                        <span>{section.title}</span>
                      </SectionText>
                    </Stack>
                  </Card>
                </SectionBox>
              );
            })}
          </>
        )}
      </SectionsContainer>
    </MenuContainer>
  );
}

export default Sections;
