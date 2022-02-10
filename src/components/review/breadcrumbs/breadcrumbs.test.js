import { render, unmountComponentAtNode } from 'react-dom';
import Breadcrumbs from './breadcrumbs';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with props', () => {
  render(<Breadcrumbs id={4} name={'Калина красная'} />, container);
  expect(container).toBe(
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href={'/films/4'} className="breadcrumbs__link">Калина красная</a>
        </li>
        <li className="breadcrumbs__item">
          <a href={'/films/4/review'} className="breadcrumbs__link" >Add review</a>
        </li>
      </ul>
    </nav>);
});
