import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
            headers.set('x-rapidapi-key', 'fb3d5c5d05mshb0f32340e03b7cdp157fe2jsn4d24b4b077cf');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`,
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => `/coin/${coinId}/history?timePeriod=${timePeriod}`,
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptosDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;