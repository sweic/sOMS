import { gql } from "@apollo/client";
import { useFetchServiceQuery } from "../../../generated/graphql";
import Loading from "../../../shared/components/Loading/Loading";
import { orderCache } from "../../../shared/graphql/Admin/gql";
import Client from "../../../shared/utils/createApolloClient";
import ActiveService from "./Active/ActiveService";
import IdleService from "./Idle/IdleService";
const va = 1;
function Service() {
  const { data, loading } = useFetchServiceQuery({
    fetchPolicy: "network-only",
    variables: {
      where: {
        id: va,
      },
    },
    onCompleted: (data) => {
      if (data.service?.current === null) return;
      Client.writeQuery({
        query: orderCache,
        data: {
          orders: data.service?.current?.orders,
          tables: data.service?.current?.tables,
          session: data.service?.current!,
          service: data.service,
        },
      });
    },
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : data?.service === null || data?.service!.current === null ? (
        <IdleService />
      ) : (
        <ActiveService data={data!} />
      )}
    </>
  );
}

export default Service;
