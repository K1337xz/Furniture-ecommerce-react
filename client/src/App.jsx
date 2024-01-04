import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/aboutpage/Aboutpage.jsx";
import Materialspage from "./pages/materialspage/Materialspage.jsx";
import Contactpage from "./pages/contactpage/Contactpage.jsx";
import Productspage from "./pages/productspage/Productspage.jsx";
import ClickedProduct from "./pages/clickedproductpage/ClickedProduct.jsx";
import CartPage from "./pages/cartpage/CartPage.jsx";
import OrderPage from "./pages/ordersuccespage/OrderPage.jsx";
import store from "./redux/store.jsx";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/about",
		element: <Aboutpage />,
	},
	{
		path: "/materials",
		element: <Materialspage />,
	},
	{
		path: "/contact",
		element: <Contactpage />,
	},
	{
		path: "/products/:id",
		element: <Productspage />,
	},
	{
		path: "/product/:category/:id",
		element: <ClickedProduct />,
	},
	{
		path: "/cart",
		element: <CartPage />,
	},
	{
		path: "/checkout",
		element: <OrderPage />,
	},
]);

function App() {
	return (
		<Provider store={store}>
			<div>
				<RouterProvider router={router} />
			</div>
		</Provider>
	);
}

export default App;
