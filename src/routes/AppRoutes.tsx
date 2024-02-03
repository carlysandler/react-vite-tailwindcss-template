import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./home";
import ErrorPage from "@/pages/error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default router;
