export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  Favorites: '/mylist',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  MoviePage: '/films/:id',
};

export const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
};

export const descParts = ['Overview', 'Details', 'Reviews'];

export const genres = {
  'All genres': 'All genres',
  Comedies: 'Comedy',
  Documentary: 'Documentary',
  Dramas: 'Drama',
  Horror: 'Adventure',
  'Kids & Family': 'KidsFamily',
  Romance: 'Crime',
  'Sci-Fi': 'SciFi',
  Thrillers: 'Fantasy',
};

export const numberOfFilms = 8;
export const startOfSlice = 0;

export const rootUrl = 'https://8.react.pages.academy/wtw/';

export const serverPath = {
  films: 'films',
  comments: 'comments',
  promo: 'promo',
  similar: 'similar',
  login: 'login',
  logout: 'logout',
};


