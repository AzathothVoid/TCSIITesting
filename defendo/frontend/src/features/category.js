import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getCategoryImages: builder.query({
            query: () => `categories`,
        }),
    })
})


export const { 
    useGetCategoryImagesQuery
} = categoryApi