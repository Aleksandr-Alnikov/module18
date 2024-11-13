import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Facts from "./Pages/Facts/Facts";
import NotFound from "./Pages/NotFound";
import Beans from "./Pages/Beans/Beans";
import BeanPage from "./Pages/BeanPage";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import Recipes from "./Pages/Recipes/Recipes";
import CombinationsPage from "./Pages/CombinationsPage/CombinationsPage";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import CardRecipe from "./components/CardRecipe/CardRecipe";
import Review from "./Pages/Review/Review";


const router = createBrowserRouter([
    {
        path: '/module18',
        element: <Layout />,
        loader: Loader,
        children: [
            {
                index:true,
                element: <Home />,
            },
            {
                path: 'facts',
                element: <Facts />
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: 'beans',
                element: <Beans />
            },
            {
                path: 'bean/:id',
                element: <BeanPage />
            },
            {
                path: 'recipes',
                element: <Recipes />
            },
            {
                path: 'recipe/:id',
                element: <CardRecipe />
            },
            {
                path: 'combinations',
                element: <CombinationsPage />
            },
            {
                path: 'history',
                element: <HistoryPage />
            },
            {
                path: 'review',
                element: <Review />
            },
        ],
    },
]);


export default router;