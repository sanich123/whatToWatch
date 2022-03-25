import reducer, {checkStatus} from './authorization';
import {AuthorizationStatus} from  '../../../utils/const';

test('should return the initial state', () => {
  expect(reducer(undefined, {
    type: undefined,
  })).toEqual(
    {
      authStatus: AuthorizationStatus.Unknown,
      avatarUrl: '',
    },
  );
});

test('should change value of chosen state', () => {
  const previousState = {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
  };
  expect(reducer(previousState, checkStatus(AuthorizationStatus.Auth))).toEqual(
    {
      authStatus: AuthorizationStatus.Auth,
      avatarUrl: '',
    });
});
