import Main from '../main/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in/sign-in';
import AddReview from '../review/review/review';
import Player from '../player/player';
import MoviePage from '../movie-page/movie-page/movie-page';
import Page404 from '../page404/page404';
import { AppRoute } from '../../utils/const';
import PrivateRoute from '../../utils/private-route';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';

export default function App(): JSX.Element {
  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path={AppRoute.Main} exact />
        <Route component={SignIn} path={AppRoute.SignIn} exact />
        <Route component={AddReview} path={AppRoute.AddReview} exact />
        <Route component={Player} path={AppRoute.Player} exact />
        <Route component={MoviePage} path={AppRoute.MoviePage} exact />
        <PrivateRoute path={AppRoute.Favorites} authorizationStatus={authStatus} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
