import { DocumentNode } from "graphql";
import { useEffect, useState } from "react";
import Client from "../utils/createApolloClient";

export function useReadFragment<T>(
  id: string | number,
  type: string,
  fragment: (id: string | number) => DocumentNode
) {
  const [data, setData] = useState<T>({} as T);
  const [checked, setChecked] = useState<boolean>(false);
  const readFragmentHelper = () => {
    const fragmentData: T | null = Client.readFragment({
      fragment: fragment(id),
      id: `${type}:${id}`,
    });
    if (fragmentData === null) {
      setChecked(true);
      return;
    }
    setData(fragmentData);
    setChecked(true);
  };

  useEffect(() => {
    readFragmentHelper();
  }, []);

  return [data, checked, readFragmentHelper] as const;
}
