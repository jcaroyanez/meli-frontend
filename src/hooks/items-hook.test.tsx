import { renderHook } from "@testing-library/react";
import { useDetail, useItems } from "./items";
import * as ReactQuery from 'react-query';


describe('items hooks', () => {
	it('should call useItems then call useQuery and send correct params', () => {
		const useQueryMock = jest.spyOn(ReactQuery, 'useQuery').mockImplementation(() => ({ isLoading: false, data: [{ title: test }] }) as any);
		const { result } = renderHook(() => useItems('test'));

		expect(useQueryMock).toHaveBeenCalled();
		expect(useQueryMock).toHaveBeenCalledWith(['items', 'test'], expect.any(Function));
		expect(result.current).toEqual({ isLoading: false, data: [{ title: test }] });
	});

	it('should call useDetail then call useQuery and send correct params', () => {
		const useQueryMock = jest.spyOn(ReactQuery, 'useQuery').mockImplementation(() => ({ isLoading: false, data: [{ title: test }] }) as any);
		const { result } = renderHook(() => useDetail('1234'));

		expect(useQueryMock).toHaveBeenCalled();
		expect(useQueryMock).toHaveBeenCalledWith(['detail', '1234'], expect.any(Function));
		expect(result.current).toEqual({ isLoading: false, data: [{ title: test }] });
	});
});