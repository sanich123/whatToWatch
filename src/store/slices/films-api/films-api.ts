import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { AuthInfoDTO } from '../../../types/types';
import { serverPath } from '../../../utils/const';
import { getToken } from '../../../utils/token';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  tagTypes: ['Comments'],
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

    getComments: builder.query({
      query: (id = '') => `${serverPath.comments}/${id}`,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: {id: number}) => ({ type: 'Comments', id })),
            { type: 'Comments', id: 'LIST' },
          ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),

    postAuth: builder.mutation({
      query: (body) => ({
        url: `${serverPath.login}`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: AuthInfoDTO) => response,
    }),

    postComment: builder.mutation({
      query: ({body, id}) => ({
        url: `${serverPath.comments}/${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Comments', id: 'LIST'}],
    }),

    deleteAuth: builder.mutation({
      query: () => ({
        url: `${serverPath.logout}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmQuery,
  useGetFavoritesQuery,
  useGetAuthQuery,
  useGetCommentsQuery,
  usePostAuthMutation,
  usePostCommentMutation,
  useDeleteAuthMutation,
} = filmsApi;
