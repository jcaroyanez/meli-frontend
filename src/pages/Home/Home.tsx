import { useNavigate } from "react-router-dom"
import { Header } from "../../compornents/Header/Header"
import { Search } from "../../compornents/Search/Search"
import { onInputValue } from "./helpers-home";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header>
					<Search onInputValue={onInputValue(navigate)} />
			</Header>
		</>
	)
}