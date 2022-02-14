import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from './text-area';

const setText = jest.fn();

describe('textArea component', () => {
  it('renders with props correctly', () => {
    render(
      <TextArea setText={setText} text={'Type the text, please'} rating='8' disabled={false} />,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'I hate tests');
    expect(setText).toHaveBeenCalledTimes(13);
  });
});
