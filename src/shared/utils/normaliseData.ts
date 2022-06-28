import { FetchAllMenusQuery } from "../../generated/graphql";
import { queryCache } from "../graphql/Admin/gql";
import Client from "./createApolloClient";

export function normaliseData(data: FetchAllMenusQuery) {
  var tmpSections = {},
    tmpFoodItems = {},
    tmpMenus = [];
  for (const menu of data.menus) {
    tmpMenus.push(menu);
    for (const section of menu.sections) {
      tmpSections = { ...tmpSections, [section.id]: section };
    }
    for (const food of menu.fooditems) {
      tmpFoodItems = { ...tmpFoodItems, [food.id]: food };
    }
  }
  const cacher = {
    newMenus: tmpMenus || [],
    sections: Object.values(tmpSections) || [],
    foodItems: Object.values(tmpFoodItems) || [],
  };

  Client.writeQuery({
    query: queryCache,
    data: cacher,
  });
  return cacher;
}
