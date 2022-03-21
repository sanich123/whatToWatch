import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { AuthInfoDTO } from '../../../types/types';
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
      providesTags: (result) => result ?
        [...result.map(({ id }: {id: number}) =>
          ({ type: 'Films', id })),
        { type: 'Films', id: 'LIST' }] :
        [{ type: 'Films', id: 'LIST' }],
    }),
    postAuth: builder.mutation({
      query: (body) => ({
        url: '8.react.pages.academy/wtw/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response: AuthInfoDTO) => response,
      invalidatesTags: [{type: 'Films', id: 'LIST'}],
    }),
  }),
});

export const { useGetFilmsQuery, usePostAuthMutation } = filmsApi;
