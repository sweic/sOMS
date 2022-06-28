import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { showNotification } from "@mantine/notifications";
const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include",
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5000/graphql",
  })
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    switch (graphQLErrors[0].extensions.code) {
      case "101":
        const unavailableFoodItems = graphQLErrors[0].extensions
          .unavailableFoodItems as string[];
        showNotification({
          title: "Item(s) unavailable!",
          message: `The following item(s) in your cart are unavailable at the moment.\n${unavailableFoodItems.join(
            ", "
          )}`,
          color: "red",
        });
        return;

      case "100":
        showNotification({
          title: "Error",
          message: "Table session has expired",
          color: "red",
        });
        return;

      case "102":
        showNotification({
          title: "Error placing order",
          message: "Order was placed after last order time",
          color: "red",
        });
        return;
      case "103":
        showNotification({
          title: "Error placing order",
          message:
            "There is no service session available. Please check with the staff again.",
          color: "red",
        });
        return;
      case "104":
        showNotification({
          title: "Internal Error",
          message:
            "An internal error has occured. Please check with the staff.",
          color: "red",
        });
        return;
      case "105":
        showNotification({
          title: "Admin Error",
          message: "You are not authorized to perform this action.",
          color: "red",
        });
        window.location.href = "/error";
        return;
      default:
        break;
    }
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const links = from([errorLink, authLink, splitLink]);

const Client = new ApolloClient({
  link: links,
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      sections: {
        fields: {
          fooditems: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      fooditems: {
        fields: {
          sections: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      service: {
        keyFields: ["id"],
      },
      currentMenu: {
        merge(existing, incoming) {
          return incoming;
        },
      },
      customerTable: {
        merge(existing, incoming) {
          return incoming;
        },
      },
    },
  }),
});
export default Client;
