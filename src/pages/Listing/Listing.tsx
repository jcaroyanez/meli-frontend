import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "../../compornents/Header/Header"
import Search from "../../compornents/Search/Search"
import { ListItems } from "../../compornents/Listing/ListItems/ListItems";
import { onInputValue } from "./helpers-listing";

export const Listing = () => {
	const [serachParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();
	const query = serachParams.get('query');

	return (
		<>
			<Header>
				<Search inputValue={query as string} onInputValue={onInputValue(serachParams, location.pathname, navigate)} />
			</Header>

			<ListItems />
		</>
	)
}