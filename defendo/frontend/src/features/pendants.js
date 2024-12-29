import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pendantsApi = createApi({
    reducerPath: 'pendantsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getPendantDetails: builder.query({
            query: () => `pendants`,
        }),
        getPendantDetailsById: builder.query({
            query: (id) => `pendants/${id}`,
        }),
        addPendantDetails: builder.mutation({
            query: (newPendant) => ({
                url: 'pendants/new',
                method: 'POST',
                body: newPendant,
            }),
        }),
        deletePendantDetails: builder.mutation({
            query: (id) => ({
                url: `pendants/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetPendantDetailsQuery,
    useGetPendantDetailsByIdQuery,
    useAddPendantDetailsMutation,
    useDeletePendantDetailsMutation
} = pendantsApi