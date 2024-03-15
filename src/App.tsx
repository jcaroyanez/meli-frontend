import { Suspense } from "react";
import { RouterProvider } from 'react-router-dom'
import { ROUTES } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<Suspense fallback={<div className='loader'></div>}>
					<RouterProvider router={ROUTES} />
				</Suspense>
			</HelmetProvider>
		</QueryClientProvider>
	);
}

export default App;
