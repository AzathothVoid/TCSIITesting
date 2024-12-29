import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const customerReviewsApi = createApi({
    reducerPath: 'customerReviewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getCustomerReviews: builder.query({
            query: () => `customerReviews`,
        }),
        getCustomerReviewsById: builder.query({
            query: (id) => `customerReviews/${id}`,
        }),
        addCustomerReviews: builder.mutation({
            query: (newReview) => ({
                url: 'customerReviews/new',
                method: 'POST',
                body: newReview,
            }),
        }),
        deleteCustomerReviews: builder.mutation({
            query: (id) => ({
                url: `customerReviews/delete/${id}`,
                method: 'DELETE',
            }),
        })
    })
})


export const { 
    useGetCustomerReviewsQuery,
    useGetCustomerReviewsByIdQuery,
    useAddCustomerReviewsMutation,
    useDeleteCustomerReviewsMutation
} = customerReviewsApi