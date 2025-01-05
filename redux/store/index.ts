import { configureStore } from "@reduxjs/toolkit";

// Local imports
import navigationReducer from "../slice/navigationReducer";
import biometricsReducer from "../slice/biometricsReducer";
import mainReducer from "../slice/mainReducer";
import myAccountReducer from "../slice/myAccountReducer";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    biometrics: biometricsReducer,
    main: mainReducer,
    myAccount: myAccountReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;