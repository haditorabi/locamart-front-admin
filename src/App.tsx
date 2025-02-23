import { Refine } from "@refinedev/core";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { RefineThemes, useNotificationProvider } from "@refinedev/chakra-ui";

import { authProvider } from "./providers/auth";
import dataProvider from "./providers/dataProvider";
import { resources } from "./resources";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={RefineThemes.Blue}>
        <Refine
          routerProvider={routerProvider}
          authProvider={authProvider}
          dataProvider={dataProvider}
          resources={resources}
          notificationProvider={useNotificationProvider}
          options={{
            liveMode: "auto",
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {AppRoutes}
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
