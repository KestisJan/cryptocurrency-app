import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host', 'cryptocurrency-news2.p.rapidapi.com');
            headers.set('x-rapidapi-key', 'fb3d5c5d05mshb0f32340e03b7cdp157fe2jsn4d24b4b077cf');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => '/v1/coindesk',
        })
    })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;