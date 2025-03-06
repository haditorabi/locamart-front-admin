import { Routes, Route, Outlet, Navigate } from "react-router";
import * as Page from "./pages";
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
        <Route index element={<Page.AmenityList />} />
        <Route path="show/:id" element={<Page.AmenityShow />} />
        <Route path="edit/:id" element={<Page.AmenityEdit />} />
        <Route path="create" element={<Page.AmenityCreate />} />
      </Route>
      <Route path="/bookingTimeSlot">
        <Route index element={<Page.BookingTimeSlotList />} />
        <Route path="show/:id" element={<Page.BookingTimeSlotShow />} />
        <Route path="edit/:id" element={<Page.BookingTimeSlotEdit />} />
        <Route path="create" element={<Page.BookingTimeSlotCreate />} />
      </Route>
      <Route path="/business">
        <Route index element={<Page.BusinessList />} />
        <Route path="show/:id" element={<Page.BusinessShow />} />
        <Route path="edit/:id" element={<Page.BusinessEdit />} />
        <Route path="create" element={<Page.BusinessCreate />} />
      </Route>
      <Route path="/BusinessBooking">
        <Route index element={<Page.BusinessBookingList />} />
        {/* <Route path="show/:id" element={<Page.BusinessBookingShow />} />
        <Route path="edit/:id" element={<Page.BusinessBookingEdit />} />
        <Route path="create" element={<Page.BusinessBookingCreate />} /> */}
      </Route>
      <Route path="/BusinessBoost">
        <Route index element={<Page.BusinessBoostList />} />
        {/* <Route path="show/:id" element={<Page.BusinessBoostShow />} />
        <Route path="edit/:id" element={<Page.BusinessBoostEdit />} />
        <Route path="create" element={<Page.BusinessBoostCreate />} /> */}
      </Route>
      <Route path="/BusinessCategory">
        <Route index element={<Page.BusinessCategoryList />} />
        {/* <Route path="show/:id" element={<Page.BusinessCategoryShow />} />
        <Route path="edit/:id" element={<Page.BusinessCategoryEdit />} />
        <Route path="create" element={<Page.BusinessCategoryCreate />} /> */}
      </Route>
      <Route path="/BusinessDeal">
        <Route index element={<Page.BusinessDealList />} />
        {/* <Route path="show/:id" element={<Page.BusinessDealShow />} />
        <Route path="edit/:id" element={<Page.BusinessDealEdit />} />
        <Route path="create" element={<Page.BusinessDealCreate />} /> */}
      </Route>
      <Route path="/BusinessFollowing">
        <Route index element={<Page.BusinessFollowingList />} />
        {/* <Route path="show/:id" element={<Page.BusinessFollowingShow />} />
        <Route path="edit/:id" element={<Page.BusinessFollowingEdit />} />
        <Route path="create" element={<Page.BusinessFollowingCreate />} /> */}
      </Route>
      <Route path="/BusinessHour">
        <Route index element={<Page.BusinessHourList />} />
        {/* <Route path="show/:id" element={<Page.BusinessHourShow />} />
        <Route path="edit/:id" element={<Page.BusinessHourEdit />} />
        <Route path="create" element={<Page.BusinessHourCreate />} /> */}
      </Route>
      <Route path="/BusinessLocation">
        <Route index element={<Page.BusinessLocationList />} />
        {/* <Route path="show/:id" element={<Page.BusinessLocationShow />} />
        <Route path="edit/:id" element={<Page.BusinessLocationEdit />} />
        <Route path="create" element={<Page.BusinessLocationCreate />} /> */}
      </Route>
      <Route path="/BusinessProduct">
        <Route index element={<Page.BusinessProductList />} />
        {/* <Route path="show/:id" element={<Page.BusinessProductShow />} />
        <Route path="edit/:id" element={<Page.BusinessProductEdit />} />
        <Route path="create" element={<Page.BusinessProductCreate />} /> */}
      </Route>
      <Route path="/BusinessProductPrice">
        <Route index element={<Page.BusinessProductPriceList />} />
        {/* <Route path="show/:id" element={<Page.BusinessProductPriceShow />} />
        <Route path="edit/:id" element={<Page.BusinessProductPriceEdit />} />
        <Route path="create" element={<Page.BusinessProductPriceCreate />} /> */}
      </Route>
      <Route path="/BusinessTag">
        <Route index element={<Page.BusinessTagList />} />
        {/* <Route path="show/:id" element={<Page.BusinessTagShow />} />
        <Route path="edit/:id" element={<Page.BusinessTagEdit />} />
        <Route path="create" element={<Page.BusinessTagCreate />} /> */}
      </Route>
      <Route path="/BusinessUpdate">
        <Route index element={<Page.BusinessUpdateList />} />
        {/* <Route path="show/:id" element={<Page.BusinessUpdateShow />} />
        <Route path="edit/:id" element={<Page.BusinessUpdateEdit />} />
        <Route path="create" element={<Page.BusinessUpdateCreate />} /> */}
      </Route>
      <Route path="/City">
        <Route index element={<Page.CityList />} />
        {/* <Route path="show/:id" element={<Page.CityShow />} />
        <Route path="edit/:id" element={<Page.CityEdit />} />
        <Route path="create" element={<Page.CityCreate />} /> */}
      </Route>
      <Route path="/Country">
        <Route index element={<Page.CountryList />} />
        {/* <Route path="show/:id" element={<Page.CountryShow />} />
        <Route path="edit/:id" element={<Page.CountryEdit />} />
        <Route path="create" element={<Page.CountryCreate />} /> */}
      </Route>
      <Route path="/Currency">
        <Route index element={<Page.CurrencyList />} />
        {/* <Route path="show/:id" element={<Page.CurrencyShow />} />
        <Route path="edit/:id" element={<Page.CurrencyEdit />} />
        <Route path="create" element={<Page.CurrencyCreate />} /> */}
      </Route>
      <Route path="/DealsRedemption">
        <Route index element={<Page.DealsRedemptionList />} />
        {/* <Route path="show/:id" element={<Page.DealsRedemptionShow />} />
        <Route path="edit/:id" element={<Page.DealsRedemptionEdit />} />
        <Route path="create" element={<Page.DealsRedemptionCreate />} /> */}
      </Route>
      <Route path="/Event">
        <Route index element={<Page.EventList />} />
        {/* <Route path="show/:id" element={<Page.EventShow />} />
        <Route path="edit/:id" element={<Page.EventEdit />} />
        <Route path="create" element={<Page.EventCreate />} /> */}
      </Route>
      <Route path="/EventCategory">
        <Route index element={<Page.EventCategoryList />} />
        {/* <Route path="show/:id" element={<Page.EventCategoryShow />} />
        <Route path="edit/:id" element={<Page.EventCategoryEdit />} />
        <Route path="create" element={<Page.EventCategoryCreate />} /> */}
      </Route>
      <Route path="/Language">
        <Route index element={<Page.LanguageList />} />
        {/* <Route path="show/:id" element={<Page.LanguageShow />} />
        <Route path="edit/:id" element={<Page.LanguageEdit />} />
        <Route path="create" element={<Page.LanguageCreate />} /> */}
      </Route>
      <Route path="/Media">
        <Route index element={<Page.MediaList />} />
        {/* <Route path="show/:id" element={<Page.MediaShow />} />
        <Route path="edit/:id" element={<Page.MediaEdit />} />
        <Route path="create" element={<Page.MediaCreate />} /> */}
      </Route>
      <Route path="/Media">
        <Route index element={<Page.MediaList />} />
        {/* <Route path="show/:id" element={<Page.MediaShow />} />
        <Route path="edit/:id" element={<Page.MediaEdit />} />
        <Route path="create" element={<Page.MediaCreate />} /> */}
      </Route>
      <Route path="/Payment">
        <Route index element={<Page.PaymentList />} />
        {/* <Route path="show/:id" element={<Page.PaymentShow />} />
        <Route path="edit/:id" element={<Page.PaymentEdit />} />
        <Route path="create" element={<Page.PaymentCreate />} /> */}
      </Route>
      <Route path="/PaymentMethod">
        <Route index element={<Page.PaymentMethodList />} />
        {/* <Route path="show/:id" element={<Page.PaymentMethodShow />} />
        <Route path="edit/:id" element={<Page.PaymentMethodEdit />} />
        <Route path="create" element={<Page.PaymentMethodCreate />} /> */}
      </Route>
      <Route path="/ProductCategory">
        <Route index element={<Page.ProductCategoryList />} />
        {/* <Route path="show/:id" element={<Page.ProductCategoryShow />} />
        <Route path="edit/:id" element={<Page.ProductCategoryEdit />} />
        <Route path="create" element={<Page.ProductCategoryCreate />} /> */}
      </Route>
      <Route path="/Province">
        <Route index element={<Page.ProvinceList />} />
        {/* <Route path="show/:id" element={<Page.ProvinceShow />} />
        <Route path="edit/:id" element={<Page.ProvinceEdit />} />
        <Route path="create" element={<Page.ProvinceCreate />} /> */}
      </Route>
      <Route path="/Region">
        <Route index element={<Page.RegionList />} />
        {/* <Route path="show/:id" element={<Page.RegionShow />} />
        <Route path="edit/:id" element={<Page.RegionEdit />} />
        <Route path="create" element={<Page.RegionCreate />} /> */}
      </Route>
      <Route path="/Report">
        <Route index element={<Page.ReportList />} />
        {/* <Route path="show/:id" element={<Page.ReportShow />} />
        <Route path="edit/:id" element={<Page.ReportEdit />} />
        <Route path="create" element={<Page.ReportCreate />} /> */}
      </Route>
      <Route path="/UserAction">
        <Route index element={<Page.UserActionList />} />
        {/* <Route path="show/:id" element={<Page.UserActionShow />} />
        <Route path="edit/:id" element={<Page.UserActionEdit />} />
        <Route path="create" element={<Page.UserActionCreate />} /> */}
      </Route>
      <Route path="/UserActionLog">
        <Route index element={<Page.UserActionLogList />} />
        {/* <Route path="show/:id" element={<Page.UserActionLogShow />} />
        <Route path="edit/:id" element={<Page.UserActionLogEdit />} />
        <Route path="create" element={<Page.UserActionLogCreate />} /> */}
      </Route>
      <Route path="/UserBlocked">
        <Route index element={<Page.UserBlockedList />} />
        {/* <Route path="show/:id" element={<Page.UserBlockedShow />} />
        <Route path="edit/:id" element={<Page.UserBlockedEdit />} />
        <Route path="create" element={<Page.UserBlockedCreate />} /> */}
      </Route>
      <Route path="/UserBooking">
        <Route index element={<Page.UserBookingList />} />
        {/* <Route path="show/:id" element={<Page.UserBookingShow />} />
        <Route path="edit/:id" element={<Page.UserBookingEdit />} />
        <Route path="create" element={<Page.UserBookingCreate />} /> */}
      </Route>
      <Route path="/UserBookmark">
        <Route index element={<Page.UserBookmarkList />} />
        {/* <Route path="show/:id" element={<Page.UserBookmarkShow />} />
        <Route path="edit/:id" element={<Page.UserBookmarkEdit />} />
        <Route path="create" element={<Page.UserBookmarkCreate />} /> */}
      </Route>
      <Route path="/UserCheckin">
        <Route index element={<Page.UserCheckinList />} />
        {/* <Route path="show/:id" element={<Page.UserCheckinShow />} />
        <Route path="edit/:id" element={<Page.UserCheckinEdit />} />
        <Route path="create" element={<Page.UserCheckinCreate />} /> */}
      </Route>
      <Route path="/UserFollowing">
        <Route index element={<Page.UserFollowingList />} />
        {/* <Route path="show/:id" element={<Page.UserFollowingShow />} />
        <Route path="edit/:id" element={<Page.UserFollowingEdit />} />
        <Route path="create" element={<Page.UserFollowingCreate />} /> */}
      </Route>
      <Route path="/UserPrefrence">
        <Route index element={<Page.UserPrefrenceList />} />
        {/* <Route path="show/:id" element={<Page.UserPrefrenceShow />} />
        <Route path="edit/:id" element={<Page.UserPrefrenceEdit />} />
        <Route path="create" element={<Page.UserPrefrenceCreate />} /> */}
      </Route>
      <Route path="/UserReview">
        <Route index element={<Page.UserReviewList />} />
        {/* <Route path="show/:id" element={<Page.UserReviewShow />} />
        <Route path="edit/:id" element={<Page.UserReviewEdit />} />
        <Route path="create" element={<Page.UserReviewCreate />} /> */}
      </Route>
      <Route path="/UserScore">
        <Route index element={<Page.UserScoreList />} />
        {/* <Route path="show/:id" element={<Page.UserScoreShow />} />
        <Route path="edit/:id" element={<Page.UserScoreEdit />} />
        <Route path="create" element={<Page.UserScoreCreate />} /> */}
      </Route>
      <Route path="/UserVerification">
        <Route index element={<Page.UserVerificationList />} />
        {/* <Route path="show/:id" element={<Page.UserVerificationShow />} />
        <Route path="edit/:id" element={<Page.UserVerificationEdit />} />
        <Route path="create" element={<Page.UserVerificationCreate />} /> */}
      </Route>
      <Route path="/UserWallet">
        <Route index element={<Page.UserWalletList />} />
        {/* <Route path="show/:id" element={<Page.UserWalletShow />} />
        <Route path="edit/:id" element={<Page.UserWalletEdit />} />
        <Route path="create" element={<Page.UserWalletCreate />} /> */}
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
