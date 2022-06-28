import { MultiSelect, NumberInput, Switch, TextInput } from "@mantine/core";
import DropzoneField from "../../Dropzone/DropzoneField";
export default {
  name: "item",
  components: (
    state: Record<string, any>,
    mergeState: (newState: Record<string, any>) => void,
    cacheData: any
  ) => [
    {
      componentName: "Food Name",
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
      componentName: "Price",
      component: (
        <NumberInput
          required
          min={0}
          key="price"
          precision={2}
          value={parseFloat(state.price || "1.00")}
          onChange={(val) => {
            mergeState({ price: val?.toString() });
          }}
        />
      ),
    },
    {
      componentName: "Availabliity",
      component: (
        <Switch
          required
          key="available"
          checked={state.available || false}
          onChange={() => {
            mergeState(({ available }: { available: boolean }) => ({
              available: !available,
            }));
          }}
        />
      ),
    },
    {
      componentName: "Sections",
      component: (
        <MultiSelect
          value={state.existingSections}
          required
          data={cacheData.sections || []}
          onChange={(value) => {
            mergeState({
              sections: [...value],
            });
            mergeState({ existingSections: [...value] });
          }}
        />
      ),
    },
    {
      componentName: "Add Food Image",
      component: (
        <DropzoneField
          mergeState={mergeState}
          existingImage={state.image?.imageURL}
        />
      ),
    },
  ],
};
