import { getToken } from './token';
import { AuthType, CommentType } from '../types/types';
import { httpMethods, rootUrl } from './const';

export const getData = async (url: string) =>
  await fetch(`${rootUrl}${url}`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': getToken(),
    },
  });

export const postData =
async (url: string, data?: AuthType | CommentType) => {
  if (data) {
    return  await fetch(`${rootUrl}${url}`, {
      method: httpMethods.post,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
      body: JSON.stringify(data),
    });
  } else {
    return await fetch(`${rootUrl}${url}`, {
      method: httpMethods.post,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    });
  }};

export const deleteData = (url: string) => fetch(`${rootUrl}${url}`, {
  method: 'DELETE',
});
