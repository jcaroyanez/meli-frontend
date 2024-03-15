import { useState } from 'react'
import IcSearch from '../uiCons/UICsearch/UICsearch'
import './Search.scss'

interface SearchProps {
	onInputValue?: (query: string) => void;
	inputValue?: string;
}

export const Search = ({ onInputValue = () => { return }, inputValue = ''}: SearchProps) => {
  const [textInput, setTextInput] = useState()

  const handlerSubmit = (e?: any) => {
    e?.preventDefault()

    if (textInput) {
      onInputValue(textInput)
    }
  }

  const handlerChange = (event: any) => {
    setTextInput(event.target.value)
  }

	const handlerKeyDown = (event: any) => {
		if(event.keyCode === 13) {
			handlerSubmit()
		}
	}

  return (
    <form onSubmit={handlerSubmit} className='content-search'>
      <input
        key={inputValue}
        defaultValue={inputValue}
        onChange={handlerChange}
				onKeyDown={handlerKeyDown}
        autoCorrect='off'
        autoComplete='off'
        className='search-input'
        name='textInput'
        placeholder='Nunca dejes de buscar'
        aria-label='Ingresa lo que quieras encontrar'
      />

      <button className='search-btn' aria-label='Buscar'>
        <IcSearch width={20} heigth={20} fill='#666' />
      </button>
    </form>
  )
}

export default Search
