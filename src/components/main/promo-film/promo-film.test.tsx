import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../../utils/const';
import PromoFilm from './promo-film';

describe('PromoFilm', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    movies: {
      favorites: [],
    },
    authorization: {
      authStatus: AuthorizationStatus.NoAuth,
    },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <PromoFilm />
      </Provider>,
    );
    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});
