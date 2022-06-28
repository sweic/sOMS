import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppRouter from "./router/index";
import Client from "./shared/utils/createApolloClient";
import { appTheme } from "./styles/constants";
import "./styles/fontStyles.css";
import GlobalStyles from "./styles/GlobalStyles";
function App() {
  return (
    <ApolloProvider client={Client}>
      <MantineProvider
        theme={{
          colors: {
            brand: appTheme.colors.primary,
          },
          primaryColor: "brand",
        }}
      >
        <NotificationsProvider>
          <GlobalStyles />
          <AppRouter />
        </NotificationsProvider>
      </MantineProvider>
    </ApolloProvider>
  );
}

export default App;
