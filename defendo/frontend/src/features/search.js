import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
    reducerPath: 'seacrhApi',
    tagTypes : ['Search'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        searchProducts: builder.query({
            query: (url) => url,
            providesTags : ['Search']
        })
    })
})


export const { 
    useSearchProductsQuery
} = searchApi