import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import TextArea from './text-area';

const setText = jest.fn();

describe('textArea component', () => {
  it('renders with props correctly', () => {
    render(
      <TextArea setText={setText} text={'Type the text, please'} rating='8' disabled={false} />,
    );
  });
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  // expect(screen.getByRole('textbox')).toBeInTheDocument();
});
