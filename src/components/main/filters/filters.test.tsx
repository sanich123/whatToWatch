import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { mockFilm } from '../../../mocks/mocks';
import Filter from './filters';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

describe('FiltersComponent', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <Filter name={mockFilm.name} filter='Drama' title='Drama'/>
        </Router>,
      </Provider>,

    );
  });
});
