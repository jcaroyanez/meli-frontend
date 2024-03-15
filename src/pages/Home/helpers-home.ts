import { NavigateFunction } from "react-router-dom";

export const onInputValue = (navigate: NavigateFunction) => (query: string) => {
	if(query) {
		navigate(`items?query=${query}`);
	}
}