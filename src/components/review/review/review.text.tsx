// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
// import AddReview from './review';
// import * as Redux from 'react-redux';
// import {createMemoryHistory} from 'history';
// import {configureMockStore} from '@jedmao/redux-mock-store';

// import {mockFilms} from './../../../mocks/mocks';

// const history = createMemoryHistory();

// describe('Review component', () => {
//   const mockStore = configureMockStore();
//   const store = mockStore({
//     film: {
//       status: 'fullfilled',
//     },
//     movies: {
//       films: mockFilms,
//     },
//   });

//   it('should render successfully', () => {
//     const dispatch = jest.fn();
//     const useDispatch = jest.spyOn(Redux, 'useDispatch');
//     useDispatch.mockReturnValue(dispatch);

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Route>
//             <AddReview />
//           </Route>
//         </BrowserRouter>
//       </Provider>,
//     );
//     screen.debug();
//     expect(screen.getByRole('form')).toBeInTheDocument();
//   });
// });
export {};
