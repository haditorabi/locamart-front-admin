import { Routes, Route, Outlet } from "react-router";
import {
  AmenityList,
  AmenityShow,
  AmenityEdit,
  AmenityCreate,
} from "./pages/amenity";
import { ErrorComponent, ThemedLayoutV2, AuthPage } from "@refinedev/chakra-ui";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource, CatchAllNavigate } from "@refinedev/react-router";
const authCredentials = {
  email: "1234@gmail.com",
  password: "test@1234",
};

export const AppRoutes = (
  <Routes>
    <Route
      element={
        <Authenticated
          key="authenticated-routes"
          fallback={<CatchAllNavigate to="/login" />}
        >
          <ThemedLayoutV2>
            <Outlet />
          </ThemedLayoutV2>
        </Authenticated>
      }
    >
      {/* <Route index element={<DashboardPage />} /> */}
      <Route path="/amenity">
        <Route index element={<AmenityList />} />
        <Route path="show/:id" element={<AmenityShow />} />
        <Route path="edit/:id" element={<AmenityEdit />} />
        <Route path="create" element={<AmenityCreate />} />
      </Route>
    </Route>

    <Route
      element={
        <Authenticated key="auth-pages" fallback={<Outlet />}>
          <NavigateToResource resource="amenity" />
        </Authenticated>
      }
    >
      <Route
        path="/login"
        element={
          <AuthPage
            type="login"
            registerLink={false}
            forgotPasswordLink={false}
            renderContent={(content) => <>{content}</>}
            formProps={{
              defaultValues: {
                ...authCredentials,
              },
            }}
          />
        }
      />
    </Route>

    <Route
      element={
        <Authenticated key="catch-all">
          <ThemedLayoutV2>
            <Outlet />
          </ThemedLayoutV2>
        </Authenticated>
      }
    >
      <Route path="*" element={<ErrorComponent />} />
    </Route>
  </Routes>
);
