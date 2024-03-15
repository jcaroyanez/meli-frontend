import { NavigateFunction } from "react-router-dom";

export const onInputValue = (
	serachParams: URLSearchParams, 
	pathname: string, 
	navigate: NavigateFunction) => (query: string) => {
		const params = new URLSearchParams(serachParams);
		if (query) {
			params.set('query', query);
		} else {
			params.delete('query');
		}

		navigate(`${pathname}?${params.toString()}`, { replace: true });
}