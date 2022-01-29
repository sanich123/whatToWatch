import { Redirect, Route, RouteProps } from 'react-router-dom';
import Favorites from '../components/favorites/favorites';
import { AppRoute, AuthorizationStatus } from './const';

interface PrivateRouteProps extends RouteProps {
  authorizationStatus: string,
}

export default function PrivateRoute({authorizationStatus, path}: PrivateRouteProps) {

  return (
    <Route path={path} exact>
      {authorizationStatus === AuthorizationStatus.Auth ? <Favorites /> : <Redirect to={AppRoute.SignIn} /> }
    </Route>
  );
}
