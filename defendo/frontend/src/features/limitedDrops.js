import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const limitedDropsApi = createApi({
    reducerPath: 'limitedDropsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getLimitedDropsDetails: builder.query({
            query: () => `limitedDrops`,
        }),
        getLimitedDropsDetailsById: builder.query({
            query: (id) => `limitedDrops/${id}`,
        }),
        addLimitedDrops: builder.mutation({
            query: (newProduct) => ({
                url: 'limitedDrops/new',
                method: 'POST',
                body: newProduct,
            }),
        }),
        deleteLimitedDrops: builder.mutation({
            query: (id) => ({
                url: `limitedDrops/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetLimitedDropsDetailsByIdQuery,
    useGetLimitedDropsDetailsQuery,
    useAddLimitedDropsMutation,
    useDeleteLimitedDropsMutation
} = limitedDropsApi