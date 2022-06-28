import { MultiSelect, Select, TextInput } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import DropzoneField from "../../Dropzone/DropzoneField";

export default {
  name: "section",
  components: (
    state: Record<string, any>,
    mergeState: (a: {}) => void,
    cacheData: any,
    fragmentData?: any
  ) => [
    {
      componentName: "Section Name",
      component: (
        <TextInput
          required
          key="title"
          value={state.title || ""}
          onChange={(e) => mergeState({ title: e.currentTarget.value })}
        />
      ),
    },
    {
      componentName: "Add Food",
      component: (
        <MultiSelect
          data={cacheData.foodItems || []}
          onChange={(value) => {
            mergeState({ fooditems: [...value] });
          }}
        />
      ),
    },
    {
      componentName: "Add Section Image",
      component: <DropzoneField mergeState={mergeState} />,
    },
  ],
};
