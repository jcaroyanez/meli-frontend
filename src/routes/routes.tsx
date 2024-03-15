import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('../pages/Home/Home').then(({ Home }) => ({ default: Home })))
const Listing = lazy(() => import('../pages/Listing/Listing').then(({ Listing }) => ({ default: Listing })))

export const ROUTES = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/items',
		element: <Listing />
	}
]);