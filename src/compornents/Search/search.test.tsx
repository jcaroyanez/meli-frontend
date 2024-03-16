import { fireEvent, render, screen } from '@testing-library/react';
import { handlerChange, handlerKeyDown, handlerSubmit } from './helper-search';
import { Search } from './Search';

jest.mock('./helper-search', () => ({
  handlerChange: jest.fn(),
  handlerKeyDown: jest.fn(),
  handlerSubmit: jest.fn(),
}));

describe('Search component', () => {
  it('should dispatch onSubmit event then call handlerChange and handlerSubmit', () => {
    render(<Search />);

    const formElement = screen.getByTestId('search');
    fireEvent.submit(formElement);

    expect(handlerChange).toHaveBeenCalled();
    expect(handlerSubmit).toHaveBeenCalled();
  });

  it('should onKeyDown onSubmit event then call handlerKeyDown', () => {
    render(<Search />);

    const formElement = screen.getByTestId('search');
    fireEvent.keyDown(formElement, { keyCode: 13 });

    expect(handlerKeyDown).toHaveBeenCalled();
  });
});
