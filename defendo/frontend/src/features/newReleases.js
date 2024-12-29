import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newReleasesApi = createApi({
    reducerPath: 'newReleasesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getNewReleasesDetails: builder.query({
            query: () => `newReleases`,
        }),
        getNewReleasesDetailsById: builder.query({
            query: (id) => `newReleases/${id}`,
        }),
        addNewReleasesDetails: builder.mutation({
            query: (newProduct) => ({
                url: 'newReleases/new',
                method: 'POST',
                body: newProduct,
            }),
        }),
        deleteNewReleasesDetails: builder.mutation({
            query: (id) => ({
                url: `newReleases/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetNewReleasesDetailsQuery,
    useGetNewReleasesDetailsByIdQuery,
    useAddNewReleasesDetailsMutation,
    useDeleteNewReleasesDetailsMutation   
} = newReleasesApi