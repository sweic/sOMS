import { ActionIcon, Menu, Paper } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "tabler-icons-react";
import Loading from "../../../shared/components/Loading/Loading";
import { queryCache } from "../../../shared/graphql/Admin/gql";
import { QueryCache } from "../../../shared/graphql/Admin/types";
import { useReadQuery } from "../../../shared/hooks/useReadQuery";
import { Entity } from "../../../shared/graphql/Admin/types";
import { color } from "../../../styles/constants";
import { MenuTable } from "./Entities/EntityTables";
import {
  MenuLeft,
  MenuNavigation,
  MenusHeading,
  MenusViewContainer,
} from "./Styles";

function Overview() {
  const [data, checked, refetch] = useReadQuery<QueryCache>(queryCache);
  const navigate = useNavigate();
  return (
    <>
      {checked ? (
        <MenusViewContainer>
          <MenuNavigation>
            <MenuLeft>
              <MenusHeading>All Menus</MenusHeading>
              <ActionIcon>
                <Plus
                  color={color.primary}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/admin/create/menu")}
                />
              </ActionIcon>
            </MenuLeft>
          </MenuNavigation>
          <Paper withBorder shadow="lg">
            <MenuTable newMenus={data.newMenus} refetch={refetch} />
          </Paper>
        </MenusViewContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Overview;
