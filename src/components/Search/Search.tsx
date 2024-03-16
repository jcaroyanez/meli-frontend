import { useState } from 'react';
import IcSearch from '../uiCons/UICsearch/UICsearch';
import './Search.scss';
import { handlerChange, handlerKeyDown, handlerSubmit } from './helper-search';

interface SearchProps {
  onInputValue?: (query: string) => void;
  inputValue?: string;
}

export const Search = ({
  onInputValue = () => {
    return;
  },
  inputValue = '',
}: SearchProps) => {
  const [textInput, setTextInput] = useState<string>('');

  return (
    <form
      onSubmit={handlerSubmit(textInput, onInputValue)}
      name="search"
      className="content-search"
    >
      <input
        key={inputValue}
        defaultValue={inputValue}
        onChange={handlerChange(setTextInput)}
        onKeyDown={handlerKeyDown(textInput, onInputValue)}
        autoCorrect="off"
        autoComplete="off"
        className="search-input"
        name="textInput"
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresa lo que quieras encontrar"
        data-testid="search"
      />

      <button className="search-btn" aria-label="Buscar">
        <IcSearch width={20} height={20} fill="#666" />
      </button>
    </form>
  );
};
