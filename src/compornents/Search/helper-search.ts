import { ChangeEvent, FormEvent } from "react";

export const handlerSubmit = (query: string, onInputValue: (query: string) => void) => (event: FormEvent<HTMLFormElement>) => {
	event?.preventDefault()

	if (query) {
		onInputValue(query)
	}
}

export const handlerChange = (setTextInput: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) => {
	setTextInput(event.target.value)
}

export const handlerKeyDown = (query: string, onInputValue: (query: string) => void) => (event: any) => {
	if(event.keyCode === 13 && query) {
		onInputValue(query);
	}
}