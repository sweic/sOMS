import { useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import Loading from "../../../../../shared/components/Loading/Loading";
import {
  orderCache,
  ORDER_SUBSCRIPTION,
} from "../../../../../shared/graphql/Admin/gql";
import {
  OrderCacheQuery,
  TableData,
  TableEntity,
} from "../../../../../shared/graphql/Admin/types";
import { useReadQuery } from "../../../../../shared/hooks/useReadQuery";
import Client from "../../../../../shared/utils/createApolloClient";
import { useCreateTable, useVacateTable } from "../../../hooks/useService";
import { ServiceTableDisplay } from "./Styles";
import TableInfo from "./TableInfo";
import VacantTable from "./VacantTable";
function ServiceTables() {
  const [tableData, setTableData] = useState<TableData>([] as TableData);
  const [tableArr, setTableArr] = useState<{ [key: number]: TableEntity }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [sessionid, setSessionID] = useState<number>(0);
  const [numTable, setNumTable] = useState<number>(0);
  const tableCreator = useCreateTable();

  const [data, checked, refetch] = useReadQuery<OrderCacheQuery>(orderCache);

  useSubscription(ORDER_SUBSCRIPTION, {
    onSubscriptionData: async ({ subscriptionData }) => {
      await Client.cache.modify({
        fields: {
          tables: () =>
            subscriptionData.data.newOrderNotification.current.tables,
          orders: () =>
            subscriptionData.data.newOrderNotification.current.orders,
        },
      });
    },
  });

  useEffect(() => {
    if (!Object.keys(data).length) return;
    setTableData(data.tables);
    setSessionID(data.session.id);
    setNumTable(data.session.table);
  }, [data]);

  useEffect(() => {
    if (!tableData) return;
    var tmpTable: { [key: number]: TableEntity } = {};
    for (const table of tableData) {
      tmpTable[table.tableNumber] = table;
    }
    setTableArr(tmpTable);
    setLoading(false);
  }, [tableData]);

  return (
    <>
      {!loading ? (
        <ServiceTableDisplay>
          {Array(numTable)
            .fill(0)
            .map((val, idx) => {
              if (Object.keys(tableArr).includes((idx + 1).toString())) {
                return <TableInfo key={idx} info={tableArr[idx + 1]} />;
              }
              return (
                <VacantTable
                  key={idx}
                  tableNum={idx + 1}
                  sessionid={sessionid}
                  creator={tableCreator}
                  refetch={refetch}
                />
              );
            })}
        </ServiceTableDisplay>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ServiceTables;
