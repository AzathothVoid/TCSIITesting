import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const instaDetailsApi = createApi({
    reducerPath: 'instaDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getInstaDetails: builder.query({
            query: () => `instaDetails`,
        }),
    })
})


export const { 
    useGetInstaDetailsQuery
} = instaDetailsApi