import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const justDroppedApi = createApi({
  reducerPath: 'justDroppedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7000'}),
  endpoints: (builder) => ({
    getJustDroppedImages: builder.query({
      query: () => `justDropped`,
    }),
  }),
});

export const { 
    useGetJustDroppedImagesQuery 
} = justDroppedApi;
