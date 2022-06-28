import {
  useEditMenuMutation,
  useEditSafeItemMutation,
  useEditSectionMutation,
} from "../../../generated/graphql";
import { queryCache } from "../../../shared/graphql/Admin/gql";
import { Entity } from "../../../shared/graphql/Admin/types";
import Client from "../../../shared/utils/createApolloClient";

export const useUpdateMutation = (type: Entity) => {
  const [menuUpdater] = useEditMenuMutation();
  const [sectionUpdater] = useEditSectionMutation();
  const [foodItemUpdater] = useEditSafeItemMutation();

  const updateTree: { [key in Entity]: any } = {
    menu: async (id: number, state: any) => {
      return await menuUpdater({
        variables: {
          where: {
            id: id,
          },
          data: {
            title: {
              set: state.title,
            },
          },
        },
        update: (cache, { data }) => {
          const currentData = cache.readQuery({ query: queryCache }) as any;

          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData.newMenus.map((menu: any) => {
                if (menu.id === data?.updateMenu!.id) return data?.updateMenu;
                return menu;
              }),
              sections: currentData.sections,
              foodItems: currentData.foodItems,
            },
          });
        },
      });
    },
    section: async (id: number, state: any) => {
      const currentData = Client.readQuery({ query: queryCache }) as any;
      const newData = {
        title: {
          set: state.title,
        },
        fooditems: {
          set: state.existingFoodItems.map((fooditemid: any) => {
            return { id: parseInt(fooditemid) };
          }),
        },
        ...(state.image && {
          image: {
            upsert: {
              create: {
                imageURL: state?.image.imageURL,
              },
              update: {
                imageURL: {
                  set: state?.image.imageURL,
                },
              },
            },
          },
        }),
      };
      return await sectionUpdater({
        variables: {
          where: {
            id: id,
          },
          data: newData,
        },
        update: (cache, { data }) => {
          const previousSection = currentData.sections.find((section: any) => {
            return section.id === data?.updateSection?.id;
          });
          var previousFoodItems: number[] = [];
          for (const fooditem of previousSection.fooditems) {
            previousFoodItems.push(fooditem.id);
          }
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData.newMenus,
              sections: currentData.sections.map((section: any) => {
                if (section.id === data?.updateSection?.id)
                  return data?.updateSection;
                return section;
              }),
              foodItems: currentData.foodItems.map((fooditem: any) => {
                if (state.existingFoodItems.includes(fooditem.id)) {
                  const newSections = fooditem.sections.reduce(
                    (a: any, c: any) => ({ ...a, [c.id]: { ...c } }),
                    {}
                  );

                  return {
                    ...fooditem,
                    sections: Object.values({
                      ...newSections,
                      [data?.updateSection?.id as number]: {
                        ...data?.updateSection,
                      },
                    }),
                  };
                } else if (previousFoodItems.includes(fooditem.id)) {
                  const newSection = fooditem.sections.filter(
                    (section: any) => {
                      return section.id !== data?.updateSection?.id;
                    }
                  );
                  return {
                    ...fooditem,
                    sections: [...newSection],
                  };
                }
                return fooditem;
              }),
            },
          });
        },
      });
    },
    item: async (id: number, state: any) => {
      const currentData = Client.readQuery({ query: queryCache }) as any;
      const newData = {
        title: {
          set: state.title,
        },
        available: {
          set: state.available,
        },
        price: {
          set: state.price.toString(),
        },
        sections: {
          set: state.existingSections.map((sectionid: any) => {
            return { id: parseInt(sectionid) };
          }),
        },
        ...(state.image && {
          image: {
            upsert: {
              create: {
                imageURL: state?.image.imageURL,
              },
              update: {
                imageURL: {
                  set: state?.image.imageURL,
                },
              },
            },
          },
        }),
      };
      await foodItemUpdater({
        variables: {
          where: {
            id: id,
          },
          data: newData,
        },
        update: (cache, { data }) => {
          const previousFoodItem = currentData.foodItems.find(
            (fooditem: any) => {
              return fooditem.id === data?.editSafeItem?.id;
            }
          );
          var previousFoodItems: number[] = [];
          for (const section of previousFoodItem.sections) {
            previousFoodItems.push(section.id);
          }
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData.newMenus,
              foodItems: currentData.foodItems.map((fooditem: any) => {
                if (fooditem.id === data?.editSafeItem?.id)
                  return data?.editSafeItem;
                return fooditem;
              }),
              sections: currentData.sections.map((section: any) => {
                if (state.existingSections.includes(section.id)) {
                  const newFoodItems = section.fooditems.reduce(
                    (a: any, c: any) => ({ ...a, [c.id]: c }),
                    {}
                  );
                  return {
                    ...section,
                    fooditems: Object.values({
                      ...newFoodItems,
                      [data?.editSafeItem?.id as number]: data?.editSafeItem,
                    }),
                  };
                } else if (previousFoodItems.includes(section.id)) {
                  const newFoodItems = section.fooditems.filter(
                    (fooditem: any) => {
                      return fooditem.id !== data?.editSafeItem?.id;
                    }
                  );
                  return {
                    ...section,
                    fooditems: [...newFoodItems],
                  };
                }
                return section;
              }),
            },
          });
        },
      });
    },
  };
  return updateTree[type];
};
