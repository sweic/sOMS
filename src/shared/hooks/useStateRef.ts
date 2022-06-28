import { useRef, useState } from "react";

export function useStateRef<T>(initialValue?: T): [T, (newValue: T) => void] {
  const [value, _setValue] = useState<T>(initialValue!);
  const valueRef = useRef<T>(initialValue!);

  const setValue = (newValue: T) => {
    _setValue(newValue);
    valueRef.current = newValue;
  };

  return [valueRef.current, setValue];
}
