import reducer, {checkStatus} from './authorization';
import {AuthorizationStatus} from  '../../../utils/const';
import { asyncConditions } from '../../../utils/const';

test('should return the initial state', () => {
  expect(reducer(undefined, {
    type: undefined,
  })).toEqual(
    {
      authStatus: AuthorizationStatus.Unknown,
      avatarUrl: '',
      status: asyncConditions.idle,
    },
  );
});

test('should change value of chosen state', () => {
  const previousState = {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
    status: asyncConditions.idle,
  };
  expect(reducer(previousState, checkStatus(AuthorizationStatus.Auth))).toEqual(
    {
      authStatus: AuthorizationStatus.Auth,
      avatarUrl: '',
      status: asyncConditions.idle,
    });
});
