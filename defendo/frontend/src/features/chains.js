import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chainsApi = createApi({
    reducerPath: 'chainsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getChainDetails: builder.query({
            query: () => `chains`,
        }),
        getChainDetailsById: builder.query({
            query: (id) => `chains/${id}`,
        }),
        addChainDetails: builder.mutation({
            query: (newProduct) => ({
                url: 'chains/new',
                method: 'POST',
                body: newProduct,
            }),
        }),
        deleteChainDetails: builder.mutation({
            query: (id) => ({
                url: `chains/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetChainDetailsQuery,
    useGetChainDetailsByIdQuery,
    useAddChainDetailsMutation,
    useDeleteChainDetailsMutation
} = chainsApi