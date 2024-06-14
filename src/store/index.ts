import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // add reducers here
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
