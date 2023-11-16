import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Aboutpage from "./pages/aboutpage/Aboutpage.jsx";
import Materialspage from "./pages/materialspage/Materialspage.jsx";
import Contactpage from "./pages/contactpage/Contactpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
