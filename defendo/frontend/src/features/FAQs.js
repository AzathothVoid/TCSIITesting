import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const FAQsApi = createApi({
    reducerPath: 'FAQsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getFAQs: builder.query({
            query: () => `FAQs`,
        }),
    })
})


export const { 
    useGetFAQsQuery
} = FAQsApi