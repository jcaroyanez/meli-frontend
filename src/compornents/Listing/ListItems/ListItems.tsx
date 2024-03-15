import { useSearchParams } from "react-router-dom";
import { useItems } from "../../../hooks/items";
import { Container } from "../../../shared/Container/Container";
import { Helmet } from "react-helmet-async";
import { Item } from "../Item/Item";
import { SkeletonList } from "../SkeletonList/SkeletonList";
import { BreadCrumbs } from "../../../shared/BreadCrumbs/BreadCrumbs";
import Skeleton from "react-loading-skeleton";
import './ListItem.scss'

export const ListItems = () => {
	const [serachParams] = useSearchParams();
	const query = serachParams.get('query');
	const { data, isLoading } = useItems(query as string);

	return (
		<>
			<Helmet>
				<title>{query} | Mercado Libre</title>
				<meta name='description' content={query as string} />
			</Helmet>
			<Container className="container-listing">
				<>
					{isLoading ? <Skeleton style={{ marginTop: 10 }} /> : <BreadCrumbs categories={data?.categories} />}
					{isLoading ?
						<SkeletonList /> :
						data?.items.map((item) => (<Item key={item.id} {...item} />))
					}
				</>
			</Container>
		</>
	);
}