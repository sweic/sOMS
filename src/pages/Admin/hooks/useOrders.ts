import {
  useCompleteOrderMutation,
  useDeleteOrderMutation,
} from "../../../generated/graphql";
import { orderCache } from "../../../shared/graphql/Admin/gql";

export const useDeleteOrder = () => {
  const [deleter] = useDeleteOrderMutation();

  const deleterHelper = async (orderid: number) => {
    return await deleter({
      variables: {
        where: {
          id: orderid,
        },
      },
      update: (cache) => {
        const normalizedID = cache.identify({
          id: orderid,
          __typename: "Order",
        });
        cache.evict({ id: normalizedID });
        cache.gc();
      },
    });
  };

  return deleterHelper;
};

export const useCompleteOrder = () => {
  const [updater] = useCompleteOrderMutation();
  const completer = async (orderid: number) => {
    await updater({
      variables: {
        where: {
          id: orderid,
        },
        data: {
          completedAt: {
            set: new Date(Date.now()),
          },
        },
      },
      update: (cache, { data }) => {
        cache.updateQuery(
          {
            query: orderCache,
          },
          (previousData) => {
            return {
              ...previousData,
              session: {
                ...previousData.session,
                revenue:
                  previousData.session.revenue + data?.completeOrder?.price,
              },
            };
          }
        );
      },
    });
    return;
  };

  return completer;
};
