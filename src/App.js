import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Main from './layouts/Main';
import PrivateRoute from './routes/PrivateRoute';
import Shop from './pages/Shop/Shop';
import Order from './pages/Order/Order';
import OrderReview from './pages/OrderReview/OrderReview';
import Shipping from './pages/Shipping/Shipping';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import UserContext from './contexts/UserContext';
import { apiUrl } from './utils/links';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{
					path: '/',
					loader: () => fetch(`${apiUrl}/products`),
					element: <Shop />
				},
				{
					path: '/order',
					loader: () => fetch(`${apiUrl}/products`),
					element: <Order />
				},
				{ path: '/order-review', element: <OrderReview /> },
				{ path: '/shipping', element: <PrivateRoute><Shipping /></PrivateRoute> },
				{ path: '/inventory', element: <PrivateRoute><Inventory /></PrivateRoute> },
				{ path: '/login', element: <Login /> },
				{ path: '/register', element: <Register /> },
				{ path: '*', element: <NotFound /> }
			]
		}
	]);

	return <UserContext>
		<RouterProvider router={router} />
	</UserContext>;
}
export default App;
