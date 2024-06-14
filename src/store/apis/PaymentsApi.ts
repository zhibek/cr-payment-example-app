import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_PAYMENTS_SERVICE_URL;

export interface PaymentsResponse {
  data: object,
  message: string,
}

type GetProvidersResponse = PaymentsResponse;

export const PaymentsApi = createApi({
  reducerPath: 'paymentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getProviders: builder.query<GetProvidersResponse, string>({
      query: (client) => `provider?client=${client}`,
    }),
  }),
});

export const { useGetProvidersQuery } = PaymentsApi;
