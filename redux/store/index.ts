import { configureStore } from "@reduxjs/toolkit";

// Local imports
import navigationReducer from "../slice/navigationReducer";
import biometricsSlice from "../slice/biometricsReducer";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    biometrics: biometricsSlice,
    // main: mainReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;