import { configureStore } from '@reduxjs/toolkit';

import { PaymentsApi } from './apis/PaymentsApi';

const store = configureStore({
  reducer: {
    [PaymentsApi.reducerPath]: PaymentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({}).concat([PaymentsApi.middleware])
  ),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
