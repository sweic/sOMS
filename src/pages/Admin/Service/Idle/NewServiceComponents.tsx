import { NumberInput, Select } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { Clock } from "tabler-icons-react";
import { FormEntityComponent } from "../../../../shared/components/FormEntities/Edit";

export const initializeNewServiceComponents = (
  state: Record<string, any>,
  mergeState: (newState: Record<string, any>) => void,
  cacheData: any
): FormEntityComponent[] => {
  const components = (
    state: Record<string, any>,
    mergeState: (newState: Record<string, any>) => void,
    cacheData: any
  ) => [
    {
      componentName: "Number of Tables",
      component: (
        <NumberInput
          min={0}
          max={100}
          key="numtable"
          precision={0}
          value={state.table || 1}
          onChange={(val) => mergeState({ table: val })}
        />
      ),
    },
    {
      componentName: "Menu",
      component: (
        <Select
          data={cacheData}
          onChange={(val) => mergeState({ menu: parseInt(val!) })}
        />
      ),
    },
    {
      componentName: "Last Order Date",
      component: (
        <DatePicker
          excludeDate={(date) =>
            date.getTime() + 1000 * 60 * 60 * 24 < new Date().getTime()
          }
          defaultValue={new Date()}
          onChange={(val) => mergeState({ date: val })}
        />
      ),
    },
    {
      componentName: "Last Order Time",
      component: (
        <TimeInput
          defaultValue={new Date(Date.now() + 1000 * 60 * 60 * 3)}
          icon={<Clock />}
          onChange={(val) => mergeState({ time: val })}
        />
      ),
    },
  ];
  return components(state, mergeState, cacheData);
};

export const checkRequiredFields = (mutationState: any): boolean => {
  const requiredFields = ["table", "menu", "date", "time"];
  for (const field of requiredFields) {
    if (
      mutationState[field] === null ||
      mutationState[field] === undefined ||
      mutationState[field] === ""
    )
      return false;
  }
  return true;
};
