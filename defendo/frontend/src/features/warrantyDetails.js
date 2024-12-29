import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const warrantyDetailsApi = createApi({
    reducerPath: 'warrantyDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getWarrantyDetails: builder.query({
            query: () => `warrantyDetails`,
        }),
    })
})


export const { 
    useGetWarrantyDetailsQuery
} = warrantyDetailsApi