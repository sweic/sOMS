import { gql, useSubscription } from "@apollo/client";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import {
  orderQuery,
  COMPLETE_ORDER,
} from "../../../shared/graphql/Customer/gql";
import { CustomerOrderQuery } from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";
import Cart from "../Cart/Cart";
import { useCheckToken } from "../hooks/useCheckToken";
import { useInitializeSidebar } from "../hooks/useInitializeSidebar";
import Order from "../Orders/Order";
import Orders from "../Orders/Orders";
import AllSections from "../Sections/AllSections";
import Section from "../Sections/Section";
import { LandingBox } from "./Styles";

function Landing() {
  const { data, checked, sectionsData } = useCheckToken();
  const [expanded, setExpanded] = useState<boolean>(false);
  const sidebarItems = useInitializeSidebar(sectionsData);
  useSubscription(COMPLETE_ORDER, {
    onSubscriptionData: (data) => {
      const currentOrders = Client.readQuery<CustomerOrderQuery>({
        query: orderQuery,
      });
      const orderID = data.subscriptionData.data.completeOrderNotification;
      currentOrders!.orders.map((order: any) => {
        if (order.id === orderID) {
          showNotification({
            title: "Order completed!",
            message: `Your Order ${orderID} has been completed `,
          });
        }
        Client.cache.updateQuery(
          {
            query: orderQuery,
          },
          (previousData) => {
            const newQuery = {
              orders: previousData.orders.map((prevOrder: any) => {
                if (prevOrder.id === orderID) {
                  return {
                    ...prevOrder,
                    completedAt: new Date(Date.now()),
                  };
                }
                return prevOrder;
              }),
            };
            return newQuery;
          }
        );
      });
    },
  });
  return (
    <>
      {checked && (
        <LandingBox>
          <Sidebar
            expanded={expanded}
            setExpanded={setExpanded}
            sidebarItems={sidebarItems}
          />
          <Routes>
            <Route path="cart" element={<Cart />} />
            <Route path="sections" element={<AllSections />} />
            <Route path="section/:sectionid" element={<Section />} />
            <Route path="all" element={<Orders />} />
            <Route path="order-:orderid" element={<Order />} />
          </Routes>
        </LandingBox>
      )}
    </>
  );
}

export default Landing;
