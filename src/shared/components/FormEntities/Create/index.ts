import { default as Item } from "./item";
import { default as Section } from "./section";
import { default as Menu } from "./foodmenu";
import { Entity } from "../../../graphql/Admin/types";
export const CreateTypes: { [key in Entity]: CreateEntityValue } = {
  item: Item,
  section: Section,
  menu: Menu,
};

interface CreateEntityValue {
  name: string;
  components: (
    state: Record<string, any>,
    mergeState: (a: {}) => void,
    cacheData: any
  ) => FormEntityComponent[];
}

interface FormEntityComponent {
  componentName: string;
  component: JSX.Element;
}
