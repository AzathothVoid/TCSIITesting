import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tankTopsApi = createApi({
    reducerPath: 'tankTopsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getTankTopsDetails: builder.query({
            query: () => `tankTops`,
        }),
        getTankTopsDetailsById: builder.query({
            query: (id) => `tankTops/${id}`,
        }),
        addTankTopsDetails: builder.mutation({
            query: (newtankTops) => ({
                url: 'tankTops/new',
                method: 'POST',
                body: newtankTops,
            }),
        }),
        deleteTankTopsDetails: builder.mutation({
            query: (id) => ({
                url: `tankTops/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetTankTopsDetailsQuery,
    useGetTankTopsDetailsByIdQuery,
    useAddTankTopsDetailsMutation,
    useDeleteTankTopsDetailsMutation
} = tankTopsApi