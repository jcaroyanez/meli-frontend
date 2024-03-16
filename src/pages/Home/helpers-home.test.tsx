import { onInputValue } from './helpers-home';

describe('Home test suite', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call method [onInputValue] and query have value then call navigate with send params correct', () => {
    const spyon = jest.fn();
    onInputValue(spyon)('test');

    expect(spyon).toHaveBeenCalled();
    expect(spyon).toHaveBeenCalledWith('/items?search=test');
  });

  it("should call method [onInputValue] and query don't have value then not call navigate", () => {
    const spyon = jest.fn();
    onInputValue(spyon)('');

    expect(spyon).not.toHaveBeenCalled();
  });
});
