import { onInputValue } from "./helpers-listing";

describe('Listing test suite', () => {
	afterEach(() => {
    jest.restoreAllMocks();
	}); 

	it('should call method [onInputValue] and query have value then set params correct', () => {
		const navigate = jest.fn();
		const spyonSet = jest.spyOn(URLSearchParams.prototype, 'set');
	
		onInputValue({} as URLSearchParams, navigate)('test');
	
		expect(spyonSet).toHaveBeenCalled();
		expect(spyonSet).toHaveBeenCalledWith('search', 'test');
	});

	it('should call method [onInputValue] and query don\'t have value then call deleted method and send params correct', () => {
		const navigate = jest.fn();
		const spyonDelete = jest.spyOn(URLSearchParams.prototype, 'delete');
	
		onInputValue({} as URLSearchParams, navigate)('');
	
		expect(spyonDelete).toHaveBeenCalled();
		expect(spyonDelete).toHaveBeenCalledWith('search');
	});

	it('should call [onInputValue] then call navigate method', () => {
		const navigate = jest.fn();

		onInputValue({} as URLSearchParams, navigate)('test');
		jest.spyOn(URLSearchParams.prototype, 'toString')
		.mockImplementation(() => 'search=test');

		expect(navigate).toHaveBeenCalled();
		expect(navigate).toHaveBeenCalledWith('/items?search=test', { replace: true });
	});
})