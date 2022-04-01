/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
// import { serverPath } from '../../../utils/const';
import BackgroundImg from './background-img';


// const promoResponse = rest.get(
//   `https://6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`,
//   (req, res, ctx) => res(ctx.json({name: 'Some name', backgroundImg: 'Some img'})),
// );

// const handlers = [promoResponse];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
global.fetch = jest.fn(() => Promise({
  json: () => Promise.resolve({
    name: 'Some name', backgroundImg: 'Some img',
  }),
}));
describe('should render correctly', () => {
  it('should find img and alt', async () => {
    await act(async () => render(<BackgroundImg />));
    expect(screen.getByText('some')).toBeInTheDocument();
  });
  // test('it should have the correct todo item clean room', async () => {
  //   render(<TodoList />);
  //   const todoItem = await screen.findByText('clean room');
  //   expect(todoItem).toBeVisible();
  // });

  // test('it should have correct user Bruce Banner', async () => {
  //   render(<TodoList />);
  //   const todoItem = await screen.findByText('Bruce Banner');
  //   expect(todoItem).toBeVisible();
  // });

  // test('it should have the correct todo item clean car', async () => {
  //   render(<TodoList />);
  //   const todoItem = await screen.findByText('clean car');
  //   expect(todoItem).toBeVisible();
  // });

  // test('it should have correct user Clark Kent', async () => {
  //   render(<TodoList />);
  //   const todoItem = await screen.findByText('Clark Kent');
  //   expect(todoItem).toBeVisible();
  // });

  // test('it should handle error message from todo', async () => {
  //   server.use(todoErrorResponse);
  //   render(<TodoList />);
  //   const todoItem = await screen.findByText('Opps come back later');
  //   expect(todoItem).toBeVisible();
  // });
});
