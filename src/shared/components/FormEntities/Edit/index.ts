import { default as Item } from "./item";
import { default as Section } from "./section";
import { default as Menu } from "./foodmenu";
import { Entity } from "../../../graphql/Admin/types";

export const EditTypes: { [key in Entity]: EditEntityValue } = {
  item: Item,
  section: Section,
  menu: Menu,
};

interface EditEntityValue {
  name: string;
  components: (
    state: Record<string, any>,
    mergeState: (a: {}) => void,
    cacheData: any
  ) => FormEntityComponent[];
}

export interface FormEntityComponent {
  componentName: string;
  component: JSX.Element;
}
