import { DocumentNode } from "graphql";
import { useEffect, useState } from "react";
import Client from "../utils/createApolloClient";

export function useReadQuery<T>(queryDocument: DocumentNode) {
  const [data, setData] = useState<T>({} as T);
  const [loaded, setLoaded] = useState<boolean>(false);
  const readQueryHelper = () => {
    const query: T | null = Client.readQuery({
      query: queryDocument,
    });
    if (query === null) {
      setData({} as T);
      setLoaded(true);
      return {} as T;
    }
    setData({ ...query });
    setLoaded(true);
    return query;
  };

  useEffect(() => {
    readQueryHelper();
  }, []);

  return [data, loaded, readQueryHelper] as const;
}
