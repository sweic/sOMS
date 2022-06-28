import { useCallback } from "react";
import {
  useDeleteFoodItemMutation,
  useDeleteMenuMutation,
  useDeleteSectionMutation,
  useEditSafeItemMutation,
} from "../../../generated/graphql";
import {
  FoodItemEntity,
  FoodItemEntityMenuParent,
  QueryCache,
  SectionEntityFragment,
  SectionInfo,
} from "../../../shared/graphql/Admin/types";
import { queryCache } from "../../../shared/graphql/Admin/gql";
import { ParentData } from "../Menus/Entities/EntityTables";

export const useDeleteSection = () => {
  const [sectionDeleter] = useDeleteSectionMutation();
  const deleter = useCallback(async (section: SectionInfo) => {
    return await sectionDeleter({
      variables: {
        where: {
          id: section.id,
        },
      },
      update: (cache) => {
        const currentData = cache.readQuery({ query: queryCache }) as any;
        var foodItemAdded: number[] = [];
        for (const fooditem of section.fooditems) {
          foodItemAdded.push(fooditem.id);
        }
        const normalizedID = cache.identify({
          id: section.id,
          __typename: "Section",
        });
        cache.evict({ id: normalizedID });
        cache.gc();
        cache.writeQuery({
          query: queryCache,
          data: {
            newMenus: currentData.newMenus.map((menu: any) => {
              if (menu.id === section.menu.id) {
                return {
                  ...menu,
                  sections: menu.sections.filter(
                    (currSection: any) => section.id !== currSection.id
                  ),
                };
              }
              return menu;
            }),
            sections: currentData.sections.filter(
              (currSection: any) => currSection.id !== section.id
            ),
            foodItems: currentData.foodItems.map((fooditem: any) => {
              if (foodItemAdded.includes(fooditem.id)) {
                return {
                  ...fooditem,
                  sections: fooditem.sections.filter(
                    (currSection: any) => currSection.id !== section.id
                  ),
                };
              }
              return fooditem;
            }),
          },
        });
      },
    });
  }, []);

  return deleter;
};
type EditItemsType = ParentData | FoodItemEntity | SectionEntityFragment;

export const useEditItem = () => {
  const [itemEditer] = useEditSafeItemMutation();

  const editer = useCallback(
    async (where: EditItemsType, parent: EditItemsType) => {
      return await itemEditer({
        variables: {
          where: {
            id: where.id,
          },
          data: {
            sections: {
              disconnect: [{ id: parent.id }],
            },
          },
        },
        update: (cache) => {
          const currentData = cache.readQuery({ query: queryCache }) as any;
          cache.writeQuery({
            query: queryCache,
            data: {
              newMenus: currentData.newMenus,
              sections: currentData.sections.map((currSection: any) => {
                if (currSection.id == parent.id) {
                  return {
                    ...currSection,
                    fooditems: currSection.fooditems.filter(
                      (fooditem: any) => fooditem.id !== where.id
                    ),
                  };
                }
                return currSection;
              }),
              foodItems: currentData.foodItems,
            },
          });
        },
      });
    },
    []
  );
  return editer;
};

export const useDeleteItem = () => {
  const [itemDeleter] = useDeleteFoodItemMutation();

  const deleter = useCallback(async (item: FoodItemEntityMenuParent) => {
    await itemDeleter({
      variables: {
        where: {
          id: item.id,
        },
      },
      update: (cache) => {
        var sectionsIncluded: number[] = [];
        for (const sect of item.sections) {
          sectionsIncluded.push(sect.id);
        }

        const normalizedID = cache.identify({
          id: item.id,
          __typename: "FoodItem",
        });
        cache.evict({ id: normalizedID });
        cache.gc();

        const currentData = cache.readQuery({ query: queryCache }) as any;
        cache.writeQuery({
          query: queryCache,
          data: {
            newMenus: currentData.newMenus.map((menu: any) => {
              if (menu.id === item.menu.id) {
                return {
                  ...menu,
                  fooditems: menu.fooditems.filter(
                    (fooditem: any) => fooditem.id !== item.id
                  ),
                };
              }
              return menu;
            }),
            sections: currentData.sections.map((section: any) => {
              if (sectionsIncluded.includes(section.id)) {
                return {
                  ...section,
                  fooditems: section.fooditems.filter(
                    (currFoodItem: any) => currFoodItem.id !== item.id
                  ),
                };
              }
              return section;
            }),
            foodItems: currentData.foodItems.filter(
              (currFoodItem: any) => currFoodItem.id !== item.id
            ),
          },
        });
      },
    });
  }, []);

  return deleter;
};

export const useDeleteMenu = () => {
  const [menuDeleter] = useDeleteMenuMutation();

  const deleter = async (menuid: number) => {
    return await menuDeleter({
      variables: {
        where: {
          id: menuid,
        },
      },
      update: (cache) => {
        const previousData = cache.readQuery<QueryCache>({ query: queryCache });
        const normalizedID = cache.identify({ id: menuid, __typename: "Menu" });
        cache.evict({ id: normalizedID });
        cache.gc();
        const deletedMenu = previousData?.newMenus.find(
          (menu) => menu.id === menuid
        );
        if (!deletedMenu) return;
        var sectionsDeleted: number[] = [];
        var itemsDeleted: number[] = [];
        for (const section of deletedMenu.sections) {
          sectionsDeleted.push(section.id);
        }
        for (const fooditem of deletedMenu.fooditems) {
          itemsDeleted.push(fooditem.id);
        }
        const newData = {
          newMenus: previousData?.newMenus.filter((menu) => menu.id !== menuid),
          sections: previousData?.sections.filter(
            (section) => !sectionsDeleted.includes(section.id)
          ),
          foodItems: previousData?.foodItems.filter(
            (item) => !itemsDeleted.includes(item.id)
          ),
        };
        cache.writeQuery({ query: queryCache, data: newData });
      },
    });
  };
  return deleter;
};
