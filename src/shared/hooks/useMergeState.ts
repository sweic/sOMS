import { useState } from "react";

export const useMergeState = (initialState?: {}) => {
  const [value, setValue] = useState<{ [key: string]: any }>(
    initialState || {}
  );

  const mergeState = (newState: Record<string, any>) => {
    if (typeof newState === "function") newState = newState(value);
    setValue({ ...value, ...newState });
  };

  const resetState = (newState?: Record<string, any>) => {
    setValue(newState ? newState : {});
  };

  return { value, mergeState, resetState };
};
