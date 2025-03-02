import { Routes, Route, Outlet, Navigate } from "react-router";
import {
  AmenityList,
  AmenityShow,
  AmenityEdit,
  AmenityCreate,
  BookingTimeSlotList,
  BookingTimeSlotShow,
  BookingTimeSlotEdit,
  BookingTimeSlotCreate,
  BusinessList,
  BusinessShow,
  BusinessEdit,
  BusinessCreate,
} from "./pages";
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
      <Route path="/" element={<Navigate to="/amenity" replace />} />

      <Route path="/amenity">
        <Route index element={<AmenityList />} />
        <Route path="show/:id" element={<AmenityShow />} />
        <Route path="edit/:id" element={<AmenityEdit />} />
        <Route path="create" element={<AmenityCreate />} />
      </Route>
      <Route path="/bookingTimeSlot">
        <Route index element={<BookingTimeSlotList />} />
        <Route path="show/:id" element={<BookingTimeSlotShow />} />
        <Route path="edit/:id" element={<BookingTimeSlotEdit />} />
        <Route path="create" element={<BookingTimeSlotCreate />} />
      </Route>
      <Route path="/business">
        <Route index element={<BusinessList />} />
        <Route path="show/:id" element={<BusinessShow />} />
        <Route path="edit/:id" element={<BusinessEdit />} />

        <Route path="create" element={<BusinessCreate />} />
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
