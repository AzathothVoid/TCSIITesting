import { configureStore, createReducer } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../features/auth.js';
import { carasouelApi } from '../features/HeroImages.js';
import { justDroppedApi } from '../features/justDropped.js';
import { categoryApi } from '../features/category.js';
import { instaDetailsApi } from '../features/instaDetails.js';
import { warrantyDetailsApi } from '../features/warrantyDetails.js';
import { customerReviewsApi } from '../features/customerReviews.js';
import { FAQsApi } from '../features/FAQs.js';
import { ringsApi } from '../features/rings.js';
import { baraceletsApi } from '../features/bracelets.js'
import { chainsApi } from '../features/chains.js'
import {pendantsApi} from '../features/pendants.js'
import {shirtsApi} from '../features/shirts.js'
import {tankTopsApi} from '../features/TankTops.js'
import { limitedDropsApi } from '../features/limitedDrops.js';
import { newReleasesApi } from '../features/newReleases.js';
import { ordersApi } from '../features/orders.js';
import {searchApi} from '../features/search.js'
import cartReducer from '../features/cartSlice.js'
import authSlice from '../features/authSlice.js';


export const store = configureStore({

  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [carasouelApi.reducerPath]: carasouelApi.reducer,
    [justDroppedApi.reducerPath]: justDroppedApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [instaDetailsApi.reducerPath]: instaDetailsApi.reducer,
    [warrantyDetailsApi.reducerPath]: warrantyDetailsApi.reducer,
    [customerReviewsApi.reducerPath]: customerReviewsApi.reducer,
    [FAQsApi.reducerPath]: FAQsApi.reducer,
    [ringsApi.reducerPath]: ringsApi.reducer,
    [baraceletsApi.reducerPath]: baraceletsApi.reducer,
    [chainsApi.reducerPath]: chainsApi.reducer,
    [pendantsApi.reducerPath]: pendantsApi.reducer,
    [shirtsApi.reducerPath]: shirtsApi.reducer,
    [tankTopsApi.reducerPath]: tankTopsApi.reducer,
    [limitedDropsApi.reducerPath]: limitedDropsApi.reducer,
    [newReleasesApi.reducerPath]: newReleasesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    cart: cartReducer,
    authSlice : authSlice 
  }
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(carasouelApi.middleware)
      .concat(justDroppedApi.middleware)
      .concat(categoryApi.middleware)
      .concat(instaDetailsApi.middleware)
      .concat(warrantyDetailsApi.middleware)
      .concat(customerReviewsApi.middleware)
      .concat(FAQsApi.middleware)
      .concat(ringsApi.middleware)
      .concat(baraceletsApi.middleware)
      .concat(chainsApi.middleware)
      .concat(pendantsApi.middleware)
      .concat(shirtsApi.middleware)
      .concat(tankTopsApi.middleware)
      .concat(limitedDropsApi.middleware)
      .concat(newReleasesApi.middleware)
      .concat(ordersApi.middleware)
      .concat(searchApi.middleware)
})