import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baraceletsApi = createApi({
    reducerPath: 'baraceletsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getBaraceletDetails: builder.query({
            query: () => `bracelets`,
        }),
        getBaraceletDetailsById: builder.query({
            query: (id) => `bracelets/${id}`,
        }),
        addBaraceletDetails: builder.mutation({
            query: (newProduct) => ({
                url: 'bracelets/new',
                method: 'POST',
                body: newProduct,
            }),
        }),
        deleteBaraceletDetails: builder.mutation({
            query: (id) => ({
                url: `bracelets/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetBaraceletDetailsQuery,
    useGetBaraceletDetailsByIdQuery,
    useAddBaraceletDetailsMutation,
    useDeleteBaraceletDetailsMutation,
} = baraceletsApi