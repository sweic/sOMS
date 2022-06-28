import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  customerCache,
  customerSectionsCache,
  customerFoodItemsCache,
  orderQuery,
} from "../../../shared/graphql/Customer/gql";
import {
  CustomerCacheQuery,
  CustomerFoodItemsCacheQuery,
  CustomerSectionsCacheQuery,
} from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";

export const useCheckToken = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [data, setData] = useState<CustomerCacheQuery>(
    {} as CustomerCacheQuery
  );
  const [sectionsData, setSectionsData] = useState<CustomerSectionsCacheQuery>(
    {} as CustomerSectionsCacheQuery
  );
  const [fooditemsData, setFoodItemsData] =
    useState<CustomerFoodItemsCacheQuery>({} as CustomerFoodItemsCacheQuery);
  const navigate = useNavigate();

  useEffect(() => {
    const customerData: CustomerCacheQuery | null = Client.readQuery({
      query: customerCache,
    });
    if (!customerData) {
      const existingToken = localStorage.getItem("token");
      if (existingToken) {
        navigate(`/token/${existingToken}`);
        return;
      }
      navigate("/error");
      return;
    }
    normaliseCustomerData(customerData);
    setData(customerData);
    setChecked(true);
    setSectionsData({
      sections: customerData.currentMenu.sections,
    });
    setFoodItemsData({
      fooditems: customerData.currentMenu.fooditems,
    });
    return;
  }, []);

  return { data, checked, sectionsData, fooditemsData };
};

function normaliseCustomerData(data: CustomerCacheQuery) {
  Client.writeQuery({
    query: customerSectionsCache,
    data: {
      sections: data.currentMenu.sections,
    },
  });
  Client.writeQuery({
    query: customerFoodItemsCache,
    data: {
      fooditems: data.currentMenu.fooditems,
    },
  });
  Client.writeQuery({
    query: orderQuery,
    data: {
      orders: data.customerTable.orders,
    },
  });
}
