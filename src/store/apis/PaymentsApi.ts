import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PaymentsApi = createApi({
  reducerPath: 'paymentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProviders: builder.query<void, void>({
      query: () => 'test',
    }),
  }),
});

export const { useGetProvidersQuery } = PaymentsApi;
