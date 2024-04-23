import App from "./App.jsx";
import Home from "./Home.jsx";
//import ErrorPage from "./ErrorPage";
import Shop from "./shop/Shop.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        //        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "shop",
                element: <Shop />,
            },
        ],
    },
];

export default routes;
