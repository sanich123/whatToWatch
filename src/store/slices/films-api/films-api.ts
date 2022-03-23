import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { AuthInfoDTO } from '../../../types/types';
import { serverPath } from '../../../utils/const';
import { getToken } from '../../../utils/token';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  tagTypes: ['Films'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://8.react.pages.academy/wtw/',
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

    getFilm: builder.query({
      query: (id = '') => `${serverPath.films}/${id}`,
    }),

    getFavorites: builder.query({
      query: () => `${serverPath.favorite}`,
    }),

    getAuth: builder.query({
      query: () => `${serverPath.login}`,
    }),

    postAuth: builder.mutation({
      query: (body) => ({
        url: `${serverPath.login}`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: AuthInfoDTO) => response,
    }),

    deleteAuth: builder.mutation({
      query: () => ({
        url: `${serverPath.logout}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetFilmsQuery, usePostAuthMutation, useDeleteAuthMutation, useGetFilmQuery, useGetFavoritesQuery, useGetAuthQuery } = filmsApi;
