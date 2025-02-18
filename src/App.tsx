import { GetListParams, GitHubBanner, Refine } from "@refinedev/core";
import {
  useNotificationProvider,
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
} from "@refinedev/antd";
import { Client, fetchExchange, OperationResult } from "@urql/core";
import createDataProvider, { createLiveProvider } from "@refinedev/graphql";
import { createClient } from "graphql-ws";
import routerProvider, {
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "./pages/posts";
// import { CategoryList, CategoryCreate, CategoryEdit } from "./pages/categories";
import {
  AmenityList,
  // , CategoryCreate, CategoryEdit
} from "./pages/amenities";
import { ConfigProvider, App as AntdApp } from "antd";
import camelCase from "camelcase";

const API_URL = "http://localhost:3000/graphql";
// const WS_URL = "http://localhost:3000/graphql";

export const client = new Client({
  url: API_URL,
  exchanges: [fetchExchange],
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <ConfigProvider theme={RefineThemes.Blue}>
        <AntdApp>
          <Refine
            routerProvider={routerProvider}
            dataProvider={createDataProvider(client, {
              getList: {
                dataMapper: (
                  response: OperationResult<any>,
                  params: GetListParams
                ) => {
                  const operationName = `${camelCase(params.resource)}`;
                  return response.data?.[operationName].items;
                },
              },
            })}
            // liveProvider={createLiveProvider(createClient({ url: WS_URL }))}
            resources={[
              // {
              //   name: "blogPosts",
              //   list: "/blog-posts",
              //   create: "/blog-posts/create",
              //   edit: "/blog-posts/edit/:id",
              //   show: "/blog-posts/show/:id",
              // },
              // {
              //   name: "categories",
              //   list: "/categories",
              //   create: "/categories/create",
              //   edit: "/categories/edit/:id",
              // },
              {
                name: "amenities",
                list: "/amenities",
                // create: "/categories/create",
                // edit: "/categories/edit/:id",
              },
            ]}
            notificationProvider={useNotificationProvider}
            options={{
              liveMode: "auto",
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                {/* <Route
                  index
                  element={<NavigateToResource resource="blogPosts" />}
                /> */}
                <Route
                  index
                  element={<NavigateToResource resource="amenities" />}
                />

                {/* <Route path="/blog-posts">
                  <Route index element={<PostList />} />
                  <Route path="create" element={<PostCreate />} />
                  <Route path="edit/:id" element={<PostEdit />} />
                  <Route path="show/:id" element={<PostShow />} />
                </Route>

                <Route path="/categories">
                  <Route index element={<CategoryList />} />
                  <Route path="create" element={<CategoryCreate />} />
                  <Route path="edit/:id" element={<CategoryEdit />} />
                </Route> */}
                <Route path="/amenities">
                  <Route index element={<AmenityList />} />
                  {/* <Route path="create" element={<CategoryCreate />} />
                  <Route path="edit/:id" element={<CategoryEdit />} /> */}
                </Route>

                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
