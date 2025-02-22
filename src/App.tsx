import { Refine } from "@refinedev/core";
import { useNotificationProvider, RefineThemes } from "@refinedev/antd";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter } from "react-router";
import "@refinedev/antd/dist/reset.css";
import { ConfigProvider, App as AntdApp } from "antd";
import { authProvider } from "./providers/auth";
import dataProvider from "./providers/dataProvider";
import { resources } from "./resources";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <AntdApp>
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
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
