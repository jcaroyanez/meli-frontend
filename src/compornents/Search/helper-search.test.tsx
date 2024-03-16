import { handlerChange, handlerKeyDown, handlerSubmit } from "./helper-search";
import { ChangeEvent, FormEvent } from "react";

describe('Search hlper', () => {
	it('should call handlerSubmit and query have value then call onInputValue and send correct params', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { preventDefault: () => { } } as FormEvent<HTMLFormElement>

		handlerSubmit('test', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).toHaveBeenCalled();
		expect(mockOnInputValue).toHaveBeenCalledWith('test');
	});

	it('should call handlerSubmit and query don\'t have value then not call onInputValue', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { preventDefault: () => { } } as FormEvent<HTMLFormElement>

		handlerSubmit('', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).not.toHaveBeenCalled();
	});

	it('should call handlerChange then call setTextInput and set value of event', () => {
		const mockSetTextInput = jest.fn();
		const mockEventChange = {target: { value: 'test'}} as ChangeEvent<HTMLInputElement>

		handlerChange(mockSetTextInput)(mockEventChange);

		expect(mockSetTextInput).toHaveBeenCalled();
		expect(mockSetTextInput).toBeCalledWith('test');
	});

	it('should call handlerKeyDown and query have value and keyCode is 13 then call onInputValue and set params correct', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { keyCode: 13 };

		handlerKeyDown('test', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).toHaveBeenCalled();
		expect(mockOnInputValue).toHaveBeenCalledWith('test');
	});

	it('should call handlerKeyDown and query don\'t have value and keyCode is 13 then not call onInputValue', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { keyCode: 13 };

		handlerKeyDown('', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).not.toHaveBeenCalled();
	});

	it('should call handlerKeyDown and query have value and keyCode is different to 13 then not call onInputValue', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { keyCode: 10 };

		handlerKeyDown('test', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).not.toHaveBeenCalled();
	});

	it('should call handlerKeyDown and query don\'t have value and keyCode is different to 13 then not call onInputValue', () => {
		const mockOnInputValue = jest.fn();
		const mockEvent = { keyCode: 10 };

		handlerKeyDown('', mockOnInputValue)(mockEvent);

		expect(mockOnInputValue).not.toHaveBeenCalled();
	});
});