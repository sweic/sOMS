import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  FoodItemCreateInput,
  MenuCreateInput,
  SectionCreateInput,
  useCreateFoodItemMutation,
  useCreateMenuItemMutation,
  useCreateSectionMutation,
} from "../../../generated/graphql";
import { QueryCache } from "../../../shared/graphql/Admin/types";
import { queryCache } from "../../../shared/graphql/Admin/gql";
import { Entity } from "../../../shared/graphql/Admin/types";

export type CleanInput = FoodItemCreateInput &
  MenuCreateInput &
  SectionCreateInput;

export const useCreateMutation = (type: Entity) => {
  const navigate = useNavigate();
  const [menuCreator] = useCreateMenuItemMutation();
  const [foodItemCreator] = useCreateFoodItemMutation();
  const [sectionCreator] = useCreateSectionMutation();
  const cleanInput = (state: any, part: any) => {
    if (state.hasOwnProperty(part)) {
      const data = state[part].map((part: any) => {
        return { id: parseInt(part) };
      });
      Object.assign(state, {
        [part]: {
          connect: data,
        },
      });
    }
    return state;
  };
  const submitTree: {
    [key in Entity]: (state: CleanInput) => Promise<FetchResult>;
  } = {
    menu: async (state: MenuCreateInput): Promise<FetchResult> => {
      return await menuCreator({
        variables: {
          data: state,
        },
        update: (cache, { data }) => {
          const currentData: any = cache.readQuery({
            query: queryCache,
          });
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: [...currentData.newMenus, data?.createMenu],
              sections: currentData.sections,
              foodItems: currentData.foodItems,
            },
          });
          navigate(`/admin/menus/${data?.createMenu.id}`);
        },
      });
    },
    item: async (state: any): Promise<FetchResult> => {
      const tmpData = cleanInput(state, "sections");
      const newData = {
        ...tmpData,
        menu: {
          connect: {
            id: parseInt(state.menu.id),
          },
        },
        ...(state.image && {
          image: {
            create: {
              imageURL: state.image?.imageURL,
            },
          },
        }),
      };
      return await foodItemCreator({
        variables: {
          data: newData,
        },
        update: (cache, { data }) => {
          var sectionsAdded: any[] = [];
          if (!data?.createFoodItem.sections) return;
          for (const add of data.createFoodItem.sections) {
            sectionsAdded.push(add.id);
          }

          const currentData: QueryCache | null = cache.readQuery({
            query: queryCache,
          });
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData?.newMenus.map((menu: any) => {
                if (data.createFoodItem.menu.id === menu.id) {
                  return {
                    ...menu,
                    fooditems: [...menu.fooditems, data.createFoodItem],
                  };
                }
                return menu;
              }),
              sections: currentData?.sections.map((sect: any) => {
                if (sectionsAdded.includes(sect.id)) {
                  return {
                    ...sect,
                    fooditems: [...sect.fooditems, data.createFoodItem],
                  };
                }
                return sect;
              }),
              foodItems: [...currentData!.foodItems, data.createFoodItem],
            },
          });
          navigate(`/admin/menus/${data?.createFoodItem.menu.id}`);
        },
      });
    },
    section: async (state: any): Promise<FetchResult> => {
      const tmpData = cleanInput(state, "fooditems");
      const newData = {
        ...tmpData,
        menu: {
          connect: {
            id: parseInt(state.menu.id),
          },
        },
        ...(state.image && {
          image: {
            create: {
              imageURL: state.image?.imageURL,
            },
          },
        }),
      };
      return await sectionCreator({
        variables: {
          data: newData,
        },
        update: (cache, { data }) => {
          var foodItemAdded: any[] = [];
          if (!data?.createSection.menu.id) return;
          for (const add of data.createSection.fooditems) {
            foodItemAdded.push(add.id);
          }
          const currentData: QueryCache | null = cache.readQuery({
            query: queryCache,
          });
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData?.newMenus.map((menu: any) => {
                if (data.createSection.menu.id === menu.id) {
                  return {
                    ...menu,
                    sections: [...menu.sections, data.createSection],
                  };
                }
                return menu;
              }),
              sections: [...currentData!.sections, data.createSection],
              foodItems: currentData!.foodItems.map((item: any) => {
                if (foodItemAdded.includes(item.id)) {
                  return {
                    ...item,
                    sections: [...item.sections, data.createSection],
                  };
                }
                return item;
              }),
            },
          });
          navigate(`/admin/menus/${data?.createSection.menu.id}`);
        },
      });
    },
  };

  return submitTree[type];
};
