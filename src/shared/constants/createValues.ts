import { Entity } from "../graphql/Admin/types";

export const entityDefaultValues: { [key in Entity]: any } = {
  item: {
    title: "",
    price: "1.00",
    available: true,
    sections: [],
    menu: "",
  },
  menu: {
    title: "",
  },
  section: {
    title: "",
    menu: "",
    fooditems: [],
  },
};

export const checkRequiredFields = (
  type: Entity,
  mutationState: any
): boolean => {
  const requiredFieldsTree: { [key in Entity]: string[] } = {
    item: ["title", "price", "menu"],
    section: ["title", "menu"],
    menu: ["title"],
  };

  const keyFields = requiredFieldsTree[type];
  for (const key of keyFields) {
    if (
      mutationState[key] === undefined ||
      mutationState[key].length === 0 ||
      mutationState[key] === ""
    ) {
      return false;
    }
  }
  return true;
};
