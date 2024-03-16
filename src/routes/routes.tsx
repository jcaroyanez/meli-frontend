import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ListItems } from '../compornents/Listing/ListItems/ListItems';

const Home = lazy(() =>
  import('../pages/Home/Home').then(({ Home }) => ({ default: Home })),
);
const Listing = lazy(() =>
  import('../pages/Listing/Listing').then(({ Listing }) => ({
    default: Listing,
  })),
);
const Detail = lazy(() =>
  import('../pages/Detail/Detail').then(({ Detail }) => ({ default: Detail })),
);

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/items',
    element: <Listing />,
    children: [
      {
        index: true,
        element: <ListItems />,
      },
      {
        path: ':id',
        element: <Detail />,
      },
    ],
  },
]);
