import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authService } from "./authentication/authService";
import { userProfileService } from "./userProfile/userProfileService";
import userProfileSlice from "./userProfile/userProfileSlice";

export const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [userProfileService.reducerPath]: userProfileService.reducer,
    userProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      userProfileService.middleware,
    ),
});

// export const store=combineReducers({
//   [authService.reducerPath]: authService.reducer,
//   userProfileSlice,
//   [userProfileService.reducerPath]: userProfileService.reducer,
// })
