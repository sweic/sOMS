import { MultiSelect, TextInput } from "@mantine/core";
import DropzoneField from "../../Dropzone/DropzoneField";

export default {
  name: "section",
  components: (
    state: Record<string, any>,
    mergeState: (a: {}) => void,
    cacheData: any
  ) => [
    {
      componentName: "Edit Section Name",
      component: (
        <TextInput
          required
          key="title"
          value={state.title || ""}
          onChange={(e) => {
            mergeState({ title: e.currentTarget.value });
          }}
        />
      ),
    },
    {
      componentName: "Add Food",
      component: (
        <MultiSelect
          value={state.existingFoodItems}
          data={cacheData.foodItems || []}
          onChange={(value) => {
            mergeState({ fooditems: [...value] });
            mergeState({
              existingFoodItems: [...value],
            });
          }}
        />
      ),
    },
    {
      componentName: "Add Section Image",
      component: (
        <DropzoneField
          mergeState={mergeState}
          existingImage={state.image?.imageURL}
        />
      ),
    },
  ],
};
