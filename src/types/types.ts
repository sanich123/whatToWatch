export interface FilmDTO {
  ['background_color']: string,
  ['background_image']: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  ['is_favorite']: boolean,
  name: string,
  ['poster_image']: string,
  ['preview_image']: string,
  ['preview_video_link']: string,
  rating: number,
  released: number,
  ['run_time']: number,
  ['scores_count']: number,
  starring: string[],
  ['video_link']: string,
}

export interface Film {
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  isFavorite: boolean,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  runTime: number,
  scoresCount: number,
  starring: string[],
  videoLink: string,
}

export interface Comment {
  id: number,
  user: {
    id: number,
    name: string,
  }
  rating: number,
  comment: string,
  date: string,
}

export interface RootState {
  authorization: {
    authStatus: string,
    avatarUrl: string,
  }
  movies: {
    filter: string,
    films: Film[];
    promoFilm: Film;
  }
}

export interface FilmDescProps {
  description: string,
  rating: number,
  director: string,
  runTime: number,
  starring: string[],
  id: number,
  released: number,
  genre: string,
}

export interface AuthInfoDTO {
  id: number,
  email: string,
  name: string,
  ['avatar_url']: string,
  token: string,
}

export interface AuthInfo {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: string
}


