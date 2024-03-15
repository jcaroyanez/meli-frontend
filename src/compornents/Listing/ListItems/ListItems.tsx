import { useSearchParams } from "react-router-dom";
import { useItems } from "../../../hooks/items";
import { Helmet } from "react-helmet-async";
import { Item } from "../Item/Item";
import { SkeletonList } from "../SkeletonList/SkeletonList";
import { BreadCrumbs } from "../../../shared/BreadCrumbs/BreadCrumbs";
import Skeleton from "react-loading-skeleton";

export const ListItems = () => {
	const [serachParams] = useSearchParams();
	const query = serachParams.get('search');
	const { data, isLoading } = useItems(query as string);

	return (
		<>
			<Helmet>
				<title>{query} | Mercado Libre</title>
				<meta name='description' content={query as string} />
			</Helmet>
			<>
				{!query && 
					<h1 style={{ fontSize: '50px', marginTop: 10, textAlign: 'center' }}>
						Ingrese una busqueda
						</h1>
				}
				{isLoading ? <Skeleton style={{ marginTop: 10 }} /> : <BreadCrumbs categories={data?.categories} />}
				{isLoading ?
					<SkeletonList /> :
					data?.items.map((item) => (<Item key={item.id} {...item} />))
				}
			</>
		</>
	);
}