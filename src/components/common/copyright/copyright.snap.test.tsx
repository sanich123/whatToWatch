import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Copyright from './copyright';

describe('Copyright comonent', () => {
  it('should render correctly', () => {
    const {container} = render(<Copyright />);
    expect(container).toMatchSnapshot();
  });
});
