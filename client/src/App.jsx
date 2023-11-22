import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/aboutpage/Aboutpage.jsx";
import Materialspage from "./pages/materialspage/Materialspage.jsx";
import Contactpage from "./pages/contactpage/Contactpage.jsx";
import Productspage from "./pages/productspage/Productspage.jsx";

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
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
