import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => `orders`,
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'newOrder',
                method: 'POST',
                body: newOrder,
            }),
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `deleteOrder/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetOrdersQuery,
    useCreateOrderMutation,
    useDeleteOrderMutation
} = ordersApi