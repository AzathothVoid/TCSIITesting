import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ringsApi = createApi({
    reducerPath: 'ringsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getRingDetails: builder.query({
            query: () => `rings`,
        })
        ,getRingDetailsById: builder.query({
            query: (id) => `rings/${id}`,
        }),
        addRingDetails: builder.mutation({
            query: (newRing) => ({
                url: 'rings/new',
                method: 'POST',
                body: newRing,
            }),
        }),
        deleteRingDetails: builder.mutation({
            query: (id) => ({
                url: `rings/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetRingDetailsQuery,
    useGetRingDetailsByIdQuery,
    useAddRingDetailsMutation,
    useDeleteRingDetailsMutation
} = ringsApi