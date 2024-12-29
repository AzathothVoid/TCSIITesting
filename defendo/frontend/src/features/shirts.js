import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shirtsApi = createApi({
    reducerPath: 'shirtsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getShirtsDetails: builder.query({
            query: () => `shirts`,
        }),
        getShirtsDetailsById: builder.query({
            query: (id) => `shirts/${id}`,
        }),
        addShirtsDetails: builder.mutation({
            query: (newshirts) => ({
                url: 'shirts/new',
                method: 'POST',
                body: newshirts,
            }),
        }),
        deleteShirtsDetails: builder.mutation({
            query: (id) => ({
                url: `shirts/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetShirtsDetailsQuery,
    useGetShirtsDetailsByIdQuery,
    useAddShirtsDetailsMutation,
    useDeleteShirtsDetailsMutation
} = shirtsApi