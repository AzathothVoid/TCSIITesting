import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carasouelApi = createApi({
    reducerPath: 'carasouelApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getHeroImages: builder.query({
            query: () => `heroImages`,
        }),
    })
})


export const { 
    useGetHeroImagesQuery
} = carasouelApi