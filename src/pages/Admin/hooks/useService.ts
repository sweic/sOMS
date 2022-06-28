import {
  FetchServiceDocument,
  useCreateTableMutation,
  useFetchServiceLazyQuery,
  useNewServiceCreatorMutation,
  useTerminateServiceMutation,
  useVacateTableMutation,
} from "../../../generated/graphql";
import { orderCache } from "../../../shared/graphql/Admin/gql";

export const useServiceCreator = () => {
  const [serviceCreator] = useNewServiceCreatorMutation();

  const creator = async (mutationState: any) => {
    const lastOrderTime = new Date(mutationState.time);
    const hour = lastOrderTime.getHours();
    const minute = lastOrderTime.getMinutes();
    const lastOrderDate = new Date(
      new Date(mutationState.date).setHours(hour, minute)
    );
    await serviceCreator({
      variables: {
        where: {
          id: 1,
        },
        create: {
          current: {
            create: {
              menu: {
                connect: {
                  id: mutationState.menu,
                },
              },
              table: mutationState.table,
              lastOrder: new Date(lastOrderDate.setSeconds(0, 0)),
            },
          },
        },
        update: {
          current: {
            create: {
              menu: {
                connect: {
                  id: mutationState.menu,
                },
              },
              table: mutationState.table,
              lastOrder: new Date(lastOrderDate.setSeconds(0, 0)),
            },
          },
        },
      },
      update: (cache, { data }) => {
        cache.modify({
          fields: {
            service: () => data?.upsertSafeService,
          },
        });
      },
    });
  };
  return creator;
};

export const useCreateTable = () => {
  const [tableCreator] = useCreateTableMutation();

  const creator = async (tableNum: number, sessionid: number) => {
    await tableCreator({
      variables: {
        data: {
          active: true,
          tableNumber: tableNum,
          session: {
            connect: {
              id: sessionid,
            },
          },
        },
      },
      refetchQueries: [
        {
          query: FetchServiceDocument,
          variables: {
            where: {
              id: 1,
            },
          },
        },
      ],
      update: (cache, { data }) => {
        cache.updateQuery({ query: orderCache }, (previousData) => {
          return {
            ...previousData,
            tables: [...previousData.tables, data?.createSafeTable],
          };
        });
      },
    });
  };
  return creator;
};

export const useVacateTable = () => {
  const [tableVacator] = useVacateTableMutation();

  const creator = async (tableid: number) => {
    return await tableVacator({
      variables: {
        where: {
          id: tableid,
        },
        data: {
          active: {
            set: false,
          },
          completedAt: {
            set: new Date(new Date(Date.now()).setSeconds(0, 0)),
          },
          session: {
            disconnect: true,
          },
        },
      },
      refetchQueries: [
        {
          query: FetchServiceDocument,
          variables: {
            where: {
              id: 1,
            },
          },
        },
      ],
    });
  };

  return creator;
};

export const useEndService = () => {
  const [serviceTerminator] = useTerminateServiceMutation();

  const terminator = async () => {
    await serviceTerminator({
      variables: {
        where: {
          id: 1,
        },
        data: {
          current: {
            disconnect: true,
            update: {
              tables: {
                updateMany: [
                  {
                    where: {
                      active: {
                        equals: true,
                      },
                    },
                    data: {
                      active: {
                        set: false,
                      },
                      completedAt: {
                        set: new Date(Date.now()),
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
      refetchQueries: [
        {
          query: FetchServiceDocument,
          variables: {
            where: {
              id: 1,
            },
          },
        },
      ],
    });
  };

  return terminator;
};
