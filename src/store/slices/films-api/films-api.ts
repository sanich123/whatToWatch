import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getToken } from '../../../utils/token';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  tagTypes: ['Films'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://',
    prepareHeaders: (headers) => {
      if (getToken()) {
        headers.set('x-token', `${getToken()}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: (endPoint = '') => `${endPoint}`,
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;
