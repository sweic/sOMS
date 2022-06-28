import { TextInput } from "@mantine/core";

export default {
  name: "menu",
  components: (state: Record<string, any>, mergeState: (a: {}) => void) => [
    {
      componentName: "Menu Name",
      component: (
        <TextInput
          required
          key="title"
          value={state.title || ""}
          onChange={(e) => mergeState({ title: e.currentTarget.value })}
        />
      ),
    },
  ],
};
